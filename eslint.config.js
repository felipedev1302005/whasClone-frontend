import tseslint from 'typescript-eslint'

export default tseslint.config(
  // ... the rest of your config ...
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked, 'plugin:react/recommended', 'standard-with-typescript'],
    env: {
      browser: true,
      es2021: true
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [
      'react'
    ],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }
)
