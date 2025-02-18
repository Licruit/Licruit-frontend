module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    camelcase: ['warn', { properties: 'never' }],
    'react/no-unstable-nested-components': 'off',
    'no-alert': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-no-useless-fragment': 'off',
    'consistent-return': 'off',
    'react/no-array-index-key': 'warn',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': ['off'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.ts', '.tsx'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: [],
        ignoreOnInitialization: false,
      },
    ],
    'no-nested-ternary': 'off',
    '@typescript-eslint/naming-convention': [
      // 네이밍 컨벤션
      'warn',
      {
        selector: 'typeAlias', // 타입 선언
        format: ['PascalCase'],
      },
      {
        selector: 'interface', // 인터페이스 선언
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'function', // exported function (컴포넌트 명)
        format: ['PascalCase'],
        modifiers: ['exported'],
      },
      {
        selector: 'function', // function
        format: ['camelCase'],
      },
    ],
  },
};
