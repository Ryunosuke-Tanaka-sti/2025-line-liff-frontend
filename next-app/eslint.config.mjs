import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import PluginImport from "eslint-plugin-import";
import PluginTailwindcss from "eslint-plugin-tailwindcss";
import PluginUnusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
  ...PluginTailwindcss.configs["flat/recommended"],
  {
    plugins: { "unused-imports": PluginUnusedImports },
    rules: {
      "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    plugins: { import: PluginImport },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // 組み込みモジュール
            "external", // npmでインストールした外部ライブラリ
            "internal", // 自作モジュール
            ["parent", "sibling"],
            "object",
            "type",
            "index",
          ],
          "newlines-between": "always", // グループ毎にで改行を入れる
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc", // 昇順にソート
            caseInsensitive: true, // 小文字大文字を区別する
          },
          pathGroups: [
            // 指定した順番にソートされる
            {
              pattern: "@hooks/*", // パターン
              group: "internal", // グループ名
              position: "before", // どの位置に挿入するか
            },
            {
              pattern: "@utilities/*", // パターン
              group: "object", // グループ名
              position: "after", // どの位置に挿入するか
            },
            {
              pattern: "@components/*", // パターン
              group: "object", // グループ名
              position: "after", // どの位置に挿入するか
            },
            {
              pattern: "@types/*", // パターン
              group: "type", // グループ名
              position: "before", // どの位置に挿入するか
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
