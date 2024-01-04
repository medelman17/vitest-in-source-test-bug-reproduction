import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    includeSource: ["./**/*.ts"],
    exclude: ["node_modules"],
    globals: true,
  },
  define: {
    "import.meta.vitest": false,
  },
});
