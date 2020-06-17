/* eslint-disable prettier/prettier */
module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  plugins: ["react", "prettier"],
  rules: {
    "no-console": "off",
  },
};
