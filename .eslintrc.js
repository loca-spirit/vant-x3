module.exports = {
  root: true,
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/no-unused-components': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-this-alias': ['off'],
    'no-unused-vars': 'off',
    'no-return-assign': 'off',
    'array-callback-return': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'no-empty': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'max-classes-per-file': 'off',
    'lines-between-class-members': 'off',
    'operator-linebreak': 'off',
    'import/named': 'off',
    'import/export': 'off',
    'prefer-destructuring': 'off',
    'func-names': 'off',
    'semi-style': ['error', 'first'],
    'no-param-reassign': 0,
    'prefer-template': 0,
    'no-continue': 0,
    'consistent-return': 0,
    'no-extra-semi': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
