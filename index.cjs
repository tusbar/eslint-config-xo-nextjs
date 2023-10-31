module.exports = {
  extends: ['xo-react', 'plugin:@next/next/recommended'],

  rules: {
    // JSX
    'jsx-quotes': ['error', 'prefer-single'],

    // React
    'react/boolean-prop-naming': [
      'warn',
      {
        validateNested: true,
      },
    ],
    'react/forbid-component-props': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: 'tag-aligned',
        selfClosing: false,
      },
    ],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        // This allows <style jsx>{`…`}</style>
        children: 'ignore',
      },
    ],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-no-duplicate-props': [
      'error',
      {
        // This allows material-ui’s usage of inputProps and InputProps together:
        // <TextField inputProps={{…}} InputProps={{…}} /> errors otherwise.
        ignoreCase: false,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': [
      'warn',
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],

    // Unicorn
    // Next.js does not support node protocol imports yet
    'unicorn/prefer-node-protocol': 'off',
  },
}
