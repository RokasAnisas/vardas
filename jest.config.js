// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  transform: {
    // "^.+\\.(tsx?|jsx?)$": "ts-jest",
    '^.+\\.(ts?|js?)$': `<rootDir>/jest-configs/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html'],
};
