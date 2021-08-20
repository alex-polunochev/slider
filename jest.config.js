module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  globalSetup: '<rootDir>/test/setupEnv.js',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMock.js'
  },
  testEnvironment: 'jsdom'
};
