module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "plugin:prettier/recommended", "react-app"],
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
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*-test.js", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
};
