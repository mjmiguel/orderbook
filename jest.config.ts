import type { Config } from '@jest/types';
import { defaults } from 'jest-config';

const config: Config.InitialOptions = {

  // transformations for Typescript
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Add cleanup for React Testing Library
  // Add extra Jest assertions
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  // Test spec file resolution pattern
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"]
};

export default config;
