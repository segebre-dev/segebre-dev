import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(svg|png)$': '<rootDir>/src/utils/__mocks__/img.ts',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jest-environment-jsdom',
  bail: true,
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  notify: true,
  notifyMode: 'always',
};

export default config;
