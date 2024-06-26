/**
 * Initial reference to configuration taken from Next.js docs
 * https://nextjs.org/docs/app/building-your-application/testing/jest
 * */
import nextJest from 'next/jest.js';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(config)();

  return {
    ...nextJestConfig,
    moduleNameMapper: {
      /**
       * Workaround to put our SVG mock first inspired by `cam-eo`
       * `https://github.com/vercel/next.js/discussions/42535`
       */
      '\\.svg$': '<rootDir>/src/utils/__mocks__/svg.ts',
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

export default jestConfig;
