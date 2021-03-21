module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: ['standard', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off',
    quotes: ['error', 'single']
  },
  settings: {}
}
