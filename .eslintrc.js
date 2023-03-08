const namingConvention = () => {
  const helper = (selector, format, types) => {
    return [
      { selector, format, types, modifiers: ['public'], leadingUnderscore: 'forbid' }, // filter: filterIgnoreUnderscores },
      { selector, format, types, modifiers: ['protected'], leadingUnderscore: 'require' },
      { selector, format, types, modifiers: ['private'], prefix: ['__'] },
    ]
  }
  return [
    { selector: ['default'], format: null, modifiers: ['public'], leadingUnderscore: 'forbid' },
    { selector: ['default'], format: ['camelCase'], modifiers: ['protected'], leadingUnderscore: 'require' },
    { selector: ['default'], format: ['camelCase'], modifiers: ['private'], prefix: ['__'] },
    ...helper(['accessor'], ['camelCase']),
    { selector: ['enum'], format: ['PascalCase'] },
    { selector: ['enumMember'], format: ['UPPER_CASE'] },
    { selector: ['classMethod', 'accessor'], modifiers: ['public', 'static'], format: ['PascalCase'] },
    { selector: ['classProperty'], modifiers: ['public', 'static'], format: ['UPPER_CASE'] },
  ]
}

const config = {
  root: true,
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'import', 'no-only-tests', 'prettier', 'no-loops'],
  rules: {
    'no-loops/no-loops': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: ['cjs-export', 'export'] },
    ],
    'no-only-tests/no-only-tests': 'error',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/index'],
            message: 'Please use `.../something` instead of ``.../something/index`',
          },
        ],
      },
    ],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/naming-convention': ['error', ...namingConvention()],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'arrow-parens': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc',
        },
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object']],
        'newlines-between': 'always',
      },
    ],
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'prefer-template': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
}
module.exports = config
