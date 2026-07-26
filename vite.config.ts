import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

const externalPackages = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "@base-ui/react",
  "class-variance-authority",
  "clsx",
  "lucide-react",
  "tailwind-merge",
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: path.resolve(__dirname, "src"),
      include: ["src"],
      outDir: "dist/types",
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
      cssFileName: "styles",
    },
    rollupOptions: {
      external: (id) =>
        externalPackages.some((dependency) =>
          id === dependency || id.startsWith(`${dependency}/`),
        ),
    },
  },
});
