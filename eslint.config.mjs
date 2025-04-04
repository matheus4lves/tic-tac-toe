import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["webpack.*.js"], // Target specific files
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Allow require() here
    },
  },
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
];
