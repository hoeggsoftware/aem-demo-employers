module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:all",
    "plugin:react/all",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
