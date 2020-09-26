// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/services/**/*.ts'],
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '.*\\.ts$': 'ts-jest',
  },
}
