import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
    },
    rules: {
      "semi": [2, "never"],
      "comma-dangle": [2, "always-multiline"],
      "no-multiple-empty-lines": 2,
      "max-len": [2, 120],
      "indent": [2, 2],
      "newline-before-return": 2,
      "no-unused-vars": 0, 
      "no-nested-ternary": 0,
      "no-use-before-define": 0,

      "linebreak-style": 0,

      "import/no-default-export": 2,
      "import/order": ["error", { "newlines-between": "always"}],
      "import/prefer-default-export": 0,
      "import/no-extraneous-dependencies" : ["error", { "devDependencies": true }],
      "import/extensions": [
        0,
        "ignorePackages",
        {
          "js": "never",
          "ts": "never",
          "tsx": "never"
        }
      ],
  
      "react/react-in-jsx-scope": 0,
      "react/prop-types": 0,
      "react/jsx-props-no-spreading": 0,
      "react/require-default-props": 0,
      "react/destructuring-assignment": 0,
      "react/function-component-definition": 0,

      "@typescript-eslint/no-explicit-any": "off",
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
