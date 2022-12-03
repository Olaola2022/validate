/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-node',
  rootDir: "./",
  moduleNameMapper: {
    '@simple-async-validate': ['<rootDir>/'],
},
};