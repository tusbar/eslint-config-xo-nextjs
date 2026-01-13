import xoBizon from 'eslint-config-xo-bizon'
import {type FlatXoConfig} from 'xo'

export default [
  ...xoBizon,

  {
    ignores: ['__tests__/__fixtures__/**'],
  },

  {
    files: ['__tests__/**/*.spec.ts'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
  },
] satisfies FlatXoConfig
