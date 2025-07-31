module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/nodes/**/*.(test|spec).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};