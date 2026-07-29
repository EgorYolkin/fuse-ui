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
  "embla-carousel-react",
  "lucide-react",
  "prism-react-renderer",
  "react-day-picker",
  "tailwind-merge",
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: path.resolve(__dirname, "src"),
      include: ["src"],
      exclude: ["src/**/*.stories.ts", "src/**/*.stories.tsx"],
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
