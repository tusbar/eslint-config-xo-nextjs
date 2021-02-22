'use strict'

module.exports = {
  extends: 'xo-react',

  plugins: [
    'import',
    'node'
  ],

  rules: {
    // Extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never'
      }
    ],

    'node/file-extension-in-import': [
      'error',
      'always',
      {
        '.ts': 'never',
        '.tsx': 'never',
        '.js': 'never',
        '.jsx': 'never'
      }
    ],

    // JSX
    'jsx-quotes': ['error', 'prefer-single'],

    // React
    'react/boolean-prop-naming': ['warn', {
      validateNested: true
    }],
    'react/forbid-component-props': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function'
    }],
    'react/require-default-props': ['warn', {
      forbidDefaultForRequired: true,
      ignoreFunctionalComponents: true
    }],
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'tag-aligned',
      selfClosing: false
    }],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      // This allows <style jsx>{`…`}</style>
      children: 'ignore'
    }],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/style-prop-object': [
      'error',
      {
        allow: [
          // This is for react-intl
          'FormattedNumber'
        ]
      }
    ]
  }
}
