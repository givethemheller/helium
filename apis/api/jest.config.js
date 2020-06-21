
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      compiler: 'ttypescript'
    }
  },
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  globalTeardown: `<rootDir>/jest.teardown.ts`
};