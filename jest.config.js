module.exports = {
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  setupFiles: [
    'jest-plugin-context/setup',
  ],
  testEnvironment: 'jsdom',
};
