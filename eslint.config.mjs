import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier: prettier,
    },
  },
  {
    rules: {
      // Prettier integration
      "prettier/prettier": "warn",

      // React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-indent": ["error", 2],
      "react/jsx-wrap-multilines": "error",

      // TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: false,
          allowTaggedTemplates: false,
          allowTernary: false,
        },
      ],

      // Code Quality
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-unused-vars": "off",
      "prefer-const": "warn",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "max-len": [
        "error",
        {
          code: 105,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],

      // Import sorting
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // React first
            ["^react", "^next"],
            // External packages
            ["^@?\\w"],
            // Internal imports (@/ aliases)
            ["^@/"],
            // Parent and sibling imports
            ["^\\.\\./", "^\\./"],
            // Style imports
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    ".vercel/**",
    "coverage/**",
  ]),
]);

export default eslintConfig;
