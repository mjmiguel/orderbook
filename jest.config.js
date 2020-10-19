module.exports = {
  roots: ["<rootDir>/src"],

  // transformations for Typescript
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Add cleanup for React Testing Library
  // Add extra Jest assertions
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect"
  ],

  // Test spec file resolution pattern
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};