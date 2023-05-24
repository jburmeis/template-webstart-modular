import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  displayName: "frontend",
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["tests/"],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["text", "text-summary"],
  coveragePathIgnorePatterns: [
    "src/config", 
    "src/index.tsx", 
    "src/types",
  ],
};

export default jestConfig;
