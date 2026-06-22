import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/utils/string.ts", "src/utils/score.ts", "src/locales/index.ts", "src/rules/index.ts", "src/rules/length.rule.ts", "src/rules/digit.rule.ts", "src/rules/case.rule.ts", "src/rules/special.rule.ts", "src/rules/keyboard.rule.ts", "src/rules/sequential.rule.ts"],
  sourcemap: true,
  clean: true,
  splitting: false,
  dts: true,
  format: ["esm", "cjs"],
  legacyOutput: true
});
