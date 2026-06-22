import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/utils/string.ts", "src/utils/score.ts"],
  sourcemap: true,
  clean: true,
  splitting: false,
  dts: true,
  format: ["esm", "cjs"],
  legacyOutput: true
});
