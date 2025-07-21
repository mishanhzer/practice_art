// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint";
// import simpleImportSort from "eslint-plugin-simple-import-sort";
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
// import eslintConfigPrettier from "eslint-config-prettier";
// import js from "@eslint/js";

// export default tseslint.config(
//   { ignores: ["dist"] },
//   {
//     extends: [
//       js.configs.recommended,
//       eslintConfigPrettier,
//       eslintPluginPrettierRecommended,
//       ...tseslint.configs.recommended,
//     ],
//     files: ["**/*.{ts,tsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       "eslint-prettier": eslintPluginPrettierRecommended,
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//       "simple-import-sort": simpleImportSort,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       "prettier/prettier": "error",
//       "simple-import-sort/imports": "error",
//       "simple-import-sort/exports": "error",
//       "no-console": ["error", { allow: ["warn", "error"] }],
//       "react/react-in-jsx-scope": "off",
//       "prefer-destructuring": [
//         "error",
//         {
//           array: true,
//           object: true,
//         },
//         {
//           enforceForRenamedProperties: false,
//         },
//       ],
//       "no-useless-catch": "off",
//       "object-curly-spacing": ["error", "always"],
//       "no-unexpected-multiline": "error",
//       "@typescript-eslint/no-explicit-any": "off",
//       "@typescript-eslint/no-unused-vars": [
//         "warn",
//         {
//           varsIgnorePattern: "^_", // Ignore variables starting with '_'
//           argsIgnorePattern: "^_", // Ignore arguments starting with '_'
//         },
//       ],
//       "react-refresh/only-export-components": "error",
//     },
//   }
// );

import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import js from "@eslint/js";

export default [
  {
    ...js.configs.recommended,
    ...eslintConfigPrettier,
    ...eslintPluginPrettierRecommended,
    // files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "eslint-prettier": eslintPluginPrettierRecommended,
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
