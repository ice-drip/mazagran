import type { InitialOptionsTsJest } from "ts-jest";
const config: InitialOptionsTsJest = {
  projects: [
    {
      preset: "ts-jest",
      testEnvironment: "node",
      displayName: "mazagran",
      moduleDirectories: [
        "node_modules"
      ],
      testRegex: "./test/(.*).test.ts",
      globals: {
        "ts-jest": {
          tsconfig: "./tsconfig.json"
        }
      }
    } as any
  ]
};
export default config;