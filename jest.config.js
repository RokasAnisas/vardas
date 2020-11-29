module.exports = {
  transform: {
    '^.+\\.(ts?|js?)$': `<rootDir>/jest-configs/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`, 'dist'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html'],
};
