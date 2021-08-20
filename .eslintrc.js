// downgrade the priorities for some rules to warnings
const warnRules = ['global-require'].reduce((acc, rule) => ({ ...acc, [rule]: 'warn' }), {});

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:@next/next/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    ...warnRules,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'react/jsx-props-no-spreading': 'off'
  }
};
