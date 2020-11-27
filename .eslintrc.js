/*
Hey, devs!

Here is links that help you to find required rule quickly.

Helphul links:
* https://eslint.org/docs/rules/ - Eslint rules
* https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin - Typescript eslint rules
* https://github.com/yannickcr/eslint-plugin-react
* https://github.com/prettier/prettier-eslint
* https://github.com/benmosher/eslint-plugin-import - eslint-plugin-import

Configuring Rules:
- 'off' or 0 - turn the rule off
- 'warn' or 1 - turn the rule on as a warning (doesn't affect exit code)
- 'error' or 2 - turn the rule on as an error (exit code is 1 when triggered)

Read more about it: https://eslint.org/docs/user-guide/configuring#configuring-rules

NOTE: Please do not disable/change rules without discussing with team.
*/
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',

    // typescript
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // react
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',

    // prettier
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',

    // eslint plugin import
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsdoc', 'import'],
  ignorePatterns: [
    '**node_modules**',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^rest|^_',
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
    ],
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-types': 'error',
    'max-len': [
      'error',
      {
        code: 140,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          'rxjs/Rx',
          { name: 'primeng', message: 'Please use primeng/module-name instead' },
          { name: 'lodash-es', message: 'Please use lodash-es/function-name instead' },
        ],
      },
    ],
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    radix: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'valid-typeof': 'off',
    'react/prop-types': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
      'error',
      {
        name: 'fdescribe',
        message: 'Do not commit fdescribe. Use describe instead.',
      },
      {
        name: 'fit',
        message: 'Do not commit fit. Use describe instead.',
      },
    ],
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md#how-to-use
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
