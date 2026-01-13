import {type Config} from 'jest'

const config: Config = {
  testMatch: ['<rootDir>/__tests__/*.spec.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default config
