import tsPluginEslint from "@typescript-eslint/eslint-plugin";
import tsParserEslint from "@typescript-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";
import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";
import sonarjs from "eslint-plugin-sonarjs";
import globals from "globals";

const MAX_CHARS = 120;
const SPACES_PER_TAB = 2;
const MAX_NESTED_CALLBACKS = 3;
const MAX_PARAMS = 3;
const MAX_STATEMENTS = 10;

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["**/node_modules/**", "eslint.config.mjs"],
    plugins: {
      react,
      promise,
      sonarjs,
      "jsx-a11y": jsxA11y,
      "@typescript-eslint": tsPluginEslint,
    },
    languageOptions: {
      parser: tsParserEslint,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Рекомендуемые глобальные переменные плагинов
        ...promise.configs.recommended.globals,
        ...jsxA11y.configs.recommended.globals,
        ...sonarjs.configs.recommended.globals,
        ...react.configs.recommended.globals,
        ...tsPluginEslint.configs.recommended.globals,
        ...globals.browser,

        // Дополнительные глобальные переменные
        JSX: "readonly",
        React: "readonly",
        process: "readonly",
      },
    },
    rules: {
      /** Plugins Recommended Rules */
      ...jsxA11y.configs.recommended.rules,
      ...promise.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...tsPluginEslint.configs.recommended.rules,

      /** Override */
      "jsx-a11y/tabindex-no-positive": 0,
      "sonarjs/no-duplicate-string": 0,
      "jsx-a11y/anchor-has-content": 0,

      /** Possible Errors */
      "no-cond-assign": 2,
      "no-console": 0,
      "no-constant-condition": 2,
      "no-debugger": 2,
      "no-control-regex": 2,
      "no-empty-character-class": 2,
      "no-empty": 2,
      "no-ex-assign": 2,
      "no-extra-boolean-cast": 2,
      "no-extra-semi": 2,
      "no-func-assign": 2,
      "no-invalid-regexp": 2,
      "no-irregular-whitespace": 0,
      "no-negated-in-lhs": 2,
      "no-regex-spaces": 2,
      "no-sparse-arrays": 2,
      "no-unreachable": 2,
      "use-isnan": 2,
      "valid-jsdoc": 1,
      "valid-typeof": 2,
      "no-unexpected-multiline": 2,
      "no-constant-binary-expression": "warn",
      "no-magic-numbers": [2, { ignore: [0, 1, 2], ignoreArrayIndexes: true }],

      /** Best Practices */
      "accessor-pairs": 0,
      "block-scoped-var": 0,
      "consistent-return": 2,
      curly: 0,
      "default-case": 2,
      "dot-location": [2, "property"],
      "dot-notation": 2,
      eqeqeq: 2,
      "guard-for-in": 0,
      "no-alert": 2,
      "no-caller": 0,
      "no-div-regex": 0,
      "no-else-return": 2,
      "no-empty-label": 0,
      "no-empty-pattern": 0,
      "no-eq-null": 2,
      "no-eval": 2,
      "no-extend-native": 0,
      "no-extra-bind": 0,
      "no-fallthrough": 2,
      "no-floating-decimal": 0,
      "no-implied-eval": 0,
      "no-iterator": 0,
      "no-labels": 0,
      "no-lone-blocks": 0,
      "no-loop-func": 0,
      "no-multi-spaces": 2,
      "no-multi-str": 0,
      "no-native-reassign": 0,
      "no-new-func": 0,
      "no-new-wrappers": 0,
      "no-new": 0,
      "no-octal-escape": 0,
      "no-octal": 0,
      "no-param-reassign": 0,
      "no-process-env": 0,
      "no-proto": 0,
      "no-redeclare": 0,
      "no-return-assign": 0,
      "no-script-url": 0,
      "no-self-compare": 0,
      "no-sequences": 0,
      "no-throw-literal": 0,
      "no-unused-expressions": 0,
      "no-void": 0,
      "no-warning-comments": 0,
      "no-with": 0,
      radix: 0,
      "vars-on-top": 0,
      "wrap-iife": 0,
      yoda: 0,

      /** Variables */
      "no-catch-shadow": 0,
      "no-delete-var": 2,
      "no-label-var": 0,
      "no-shadow": 0,
      "no-shadow-restricted-names": 0,
      "no-undef": 0,
      "no-undef-init": 0,
      "no-undefined": 0,
      "no-use-before-define": 0,

      /** Stylistic Issues */
      "array-bracket-spacing": [2, "never"],
      "block-spacing": [2, "never"],
      "brace-style": [2, "1tbs", { allowSingleLine: true }],
      camelcase: [2, { ignoreDestructuring: true }],
      "comma-spacing": [2, { before: false, after: true }],
      "comma-style": [2, "last"],
      "computed-property-spacing": [2, "never"],
      "consistent-this": [2, "self"],
      "eol-last": 2,
      "func-names": 0,
      "func-style": [2, "declaration", { allowArrowFunctions: true }],
      "key-spacing": [2, { beforeColon: false, afterColon: true }],
      "lines-around-comment": [2, { beforeBlockComment: false, beforeLineComment: false, allowBlockStart: false }],
      "linebreak-style": [2, "windows"],
      "max-nested-callbacks": [2, MAX_NESTED_CALLBACKS],
      "new-cap": 2,
      "new-parens": 2,
      "newline-after-var": [2, "always"],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["case", "default"], next: "*" },
        { blankLine: "always", prev: ["*"], next: "function" },
        { blankLine: "always", prev: ["*"], next: "if" },
      ],
      "newline-before-return": 2,
      "no-array-constructor": 2,
      "no-continue": 0,
      "no-inline-comments": 2,
      "no-lonely-if": 2,
      "no-mixed-spaces-and-tabs": 2,
      "no-multiple-empty-lines": [2, { max: 1 }],
      "no-nested-ternary": 2,
      "no-new-object": 2,
      "no-spaced-func": 2,
      "no-ternary": 0,
      "no-trailing-spaces": 2,
      "no-underscore-dangle": 0,
      "no-unneeded-ternary": 0,
      "object-curly-spacing": [2, "always"],
      "one-var": [0, "always"],
      "operator-assignment": 0,
      "operator-linebreak": 0,
      "padded-blocks": 0,
      "quote-props": [2, "as-needed"],
      quotes: [2, "double", { avoidEscape: true }],
      "semi-spacing": 2,
      semi: [2, "always"],
      "sort-vars": [2, { ignoreCase: true }],
      "keyword-spacing": 2,
      "space-before-blocks": 2,
      "space-before-function-paren": 0,
      "space-in-parens": [2, "never"],
      "space-infix-ops": 2,
      "space-unary-ops": [2, { words: true, nonwords: false }],
      "spaced-comment": [2, "always", { block: { exceptions: ["-+*"] } }],
      "wrap-regex": 0,

      /** ECMAScript 6  */
      "constructor-super": 0,
      "generator-star-spacing": 0,
      "no-this-before-super": 0,
      "no-var": 0,
      "object-shorthand": 0,
      "prefer-const": 0,

      /** Legacy */
      "max-depth": 2,
      "max-len": [
        2,
        MAX_CHARS,
        SPACES_PER_TAB,
        {
          ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
          ignoreUrls: true,
        },
      ],
      "max-params": [2, MAX_PARAMS],
      "max-statements": [0, MAX_STATEMENTS],
      "no-bitwise": [2, { allow: ["~"] }],
      "no-plusplus": 0,

      "@typescript-eslint/ban-ts-comment": 0,
      "react/prop-types": 0,
    },
  },
];

