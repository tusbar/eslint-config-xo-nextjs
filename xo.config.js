import xoBizon from 'eslint-config-xo-bizon'

import selfConfig from './index.js'

/** @type {import('xo').FlatXoConfig} */
const config = [
  ...xoBizon,
  ...selfConfig,

  {
    ignores: ['__tests__/__fixtures__/**'],
  },

  {
    files: ['__tests__/**/*.spec.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
  },
]

export default config
