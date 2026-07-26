import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const temporaryDirectory = await mkdtemp(path.join(tmpdir(), "fuse-ui-package-"));

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? root,
    encoding: "utf8",
    stdio: options.capture ? "pipe" : "inherit",
  });

  if (result.status !== 0) {
    if (options.capture) {
      process.stderr.write(result.stdout ?? "");
      process.stderr.write(result.stderr ?? "");
    }
    throw new Error(`${command} ${args.join(" ")} exited with status ${result.status}`);
  }

  return result.stdout;
}

try {
  const packOutput = run(
    "npm",
    ["pack", "--ignore-scripts", "--json", "--pack-destination", temporaryDirectory],
    { capture: true },
  );
  const [{ filename }] = JSON.parse(packOutput);
  const tarball = path.join(temporaryDirectory, filename);
  const entries = run("tar", ["-tzf", tarball], { capture: true }).trim().split("\n");

  for (const requiredPath of [
    "package/package.json",
    "package/README.md",
    "package/CHANGELOG.md",
    "package/LICENSE",
    "package/dist/index.js",
    "package/dist/styles.css",
    "package/dist/types/index.d.ts",
    "package/styles.d.ts",
  ]) {
    assert(entries.includes(requiredPath), `Missing ${requiredPath} from package tarball`);
  }

  for (const entry of entries) {
    assert(!entry.startsWith("package/src/"), `Source file leaked into package: ${entry}`);
    assert(!entry.startsWith("package/tests/"), `Test file leaked into package: ${entry}`);
  }

  await writeFile(
    path.join(temporaryDirectory, "package.json"),
    JSON.stringify({ name: "fuse-ui-package-smoke-test", private: true, type: "module" }),
  );
  await writeFile(
    path.join(temporaryDirectory, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        strict: true,
        noEmit: true,
        jsx: "react-jsx",
        module: "ESNext",
        moduleResolution: "Bundler",
        target: "ES2022",
        skipLibCheck: true,
      },
      include: ["consumer.tsx"],
    }),
  );
  await writeFile(
    path.join(temporaryDirectory, "consumer.tsx"),
    `import { Badge, Button, CodeBlock, Heading, Tabs, TabsContent, TabsList, TabsTrigger } from "@egoryolkin/fuse-ui";\nimport "@egoryolkin/fuse-ui/styles.css";\n\nexport const Example = () => <><Heading level={2}>Title</Heading><Button>Save</Button><Badge>Stable</Badge><Tabs defaultValue="preview"><TabsList><TabsTrigger value="preview">Preview</TabsTrigger></TabsList><TabsContent value="preview"><CodeBlock code="const ready = true" language="tsx" /></TabsContent></Tabs></>;\n`,
  );
  await writeFile(
    path.join(temporaryDirectory, "consumer.mjs"),
    `import { createElement } from "react";\nimport { renderToStaticMarkup } from "react-dom/server";\nimport { Badge, Button, CodeBlock } from "@egoryolkin/fuse-ui";\n\nconst html = renderToStaticMarkup(createElement("div", null, createElement(Button, null, "Save"), createElement(Badge, null, "Stable"), createElement(CodeBlock, { code: "const ready = true", language: "tsx" })));\nif (!html.includes("Save") || !html.includes("code-block")) throw new Error("Package runtime smoke test failed");\n`,
  );

  run(
    "npm",
    [
      "install",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      tarball,
      "react@19",
      "react-dom@19",
      "@types/react@19",
      "@types/react-dom@19",
      "typescript@~6.0.2",
    ],
    { cwd: temporaryDirectory },
  );
  run(path.join(temporaryDirectory, "node_modules", ".bin", "tsc"), ["-p", "tsconfig.json"], {
    cwd: temporaryDirectory,
  });
  run("node", ["consumer.mjs"], { cwd: temporaryDirectory });

  const installedPackage = JSON.parse(
    await readFile(
      path.join(temporaryDirectory, "node_modules", "@egoryolkin", "fuse-ui", "package.json"),
      "utf8",
    ),
  );
  const sourcePackage = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
  assert.equal(installedPackage.version, sourcePackage.version);

  console.log(`Verified ${filename} in an isolated consumer project.`);
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
