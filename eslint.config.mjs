import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-explicit-any": "off",

      "no-unreachable": "off",
      "require-await": "error",
    },
  },

  // Always last
  eslintPluginPrettierRecommended,
);

// module.exports = {
//   env: { node: true },
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: "latest",
//   },
//   plugins: ["@typescript-eslint"],
//   extends: [
//     "plugin:@typescript-eslint/recommended-type-checked",
//     "plugin:prettier/recommended",
//   ],
//   rules: {
//     "@typescript-eslint/ban-ts-comment": "off",
//     "@typescript-eslint/explicit-function-return-type": "off",
//     "@typescript-eslint/explicit-module-boundary-types": "off",
//     "@typescript-eslint/explicit-member-accessibility": "off",
//     "@typescript-eslint/no-explicit-any": "off",

//     "no-unreachable": "off",
//     "require-await": "error",
//   },
// };
