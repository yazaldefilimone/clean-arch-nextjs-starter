export default {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/main/**/*', '!<rootDir>/src/**/index.ts', '!**/*.d.ts'],
  clearMocks: true,
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/src/shared/settings/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleNameMapper: {
    '~/tests/(.*)': '<rootDir>/tests/$1',
    '~/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic'
            }
          }
        },
        module: {
          type: 'es6',
          noInterop: false
        }
      }
    ]
  }
};
