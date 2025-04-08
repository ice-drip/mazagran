import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  sourcemap: true,
  clean: true,
  splitting: false,
  dts: true,
  format: ["esm", "cjs", "iife"],
  legacyOutput: true
});
