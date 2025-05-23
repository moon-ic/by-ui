// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
}
