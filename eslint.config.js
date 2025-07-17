import eslintPluginImport from "eslint-plugin-import";
import simplePluginImportSort from "eslint-plugin-simple-import-sort";

export default {
  plugins: {
    import: true,
    "simple-import-sort": simplePluginImportSort,
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/sort-imports": [
      "error",
      {
        "sort-imports": true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["@babel/runtime"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};

// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint";
// import simpleImportSort from "eslint-plugin-simple-import-sort";
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
// import eslintConfigPrettier from "eslint-config-prettier";

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

// import pluginJs from "@eslint/js";

// export default [
//   pluginJs.configs.recommended,
//   {
//     extends: ["some-other-config-you-use", "prettier"],
//     rules: {
//       "no-unused-vars": "warn",
//       "no-undef": "warn",
//     },
//     plugins: {
//       plugins: ["prettier-plugin-tailwindcss"],
//       import: true,
//     },
//   },
// ];
