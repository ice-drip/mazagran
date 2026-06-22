import { defineConfig } from "@rstest/core";

export default defineConfig({
  testMatch: ["./test/**/*.test.ts"],
  globals: true
});
