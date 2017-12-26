'use strict';

module.exports = {
  extends: 'eslint-config-xo-react',
  parser: 'babel-eslint',

  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    // Disable button-has-type as it does not work with props.
    'react/button-has-type': 'off',
    'react/forbid-component-props': 'off',
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
    // Next.js auto-imports React
    'react/react-in-jsx-scope': 'off'
  }
}
