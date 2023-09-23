module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["public", ".eslintrc.cjs"],
  rules: {
    indent: ["error", 2],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    '__DEV__': true,
    '__VERSION__': true,
    '__VERSION_DATE__': true,
  }
};
