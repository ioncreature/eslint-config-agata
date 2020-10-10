'use strict';

module.exports = {
    "env": {
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2020,
    },
    "plugins": [
        "sonarjs",
        "node",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:sonarjs/recommended",
        "plugin:node/recommended",
    ],
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": "error",
        "arrow-body-style": "off",
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": ["error", {"after": true, "before": true}],
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": ["error", "stroustrup"],
        "callback-return": ["error", ["callback", "cb", "done"]],
        "camelcase": "error",
        "capitalized-comments": "off",
        "class-methods-use-this": "error",
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", {"after": true, "before": false}],
        "comma-style": ["error", "last"],
        "complexity": ["error", {"max": 40}],
        "computed-property-spacing": ["error", "never"],
        "consistent-return": "off",
        "consistent-this": ["error", "that"],
        "constructor-super": "error",
        "curly": "off",
        "default-case": "off",
        "dot-location": ["error", "property"],
        "dot-notation": ["error", {"allowKeywords": true}],
        "eol-last": ["error", "always"],
        "eqeqeq": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": "off",
        "func-style": ["error", "declaration", {"allowArrowFunctions": true}],
        "generator-star-spacing": "error",
        "global-require": "off",
        "guard-for-in": "error",
        "handle-callback-err": ["error", "error"],
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "indent": ["error", 4, {"SwitchCase": 1, "MemberExpression": 1}],
        "init-declarations": "off",
        "jsx-quotes": ["error", "prefer-single"],
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
        "keyword-spacing": ["error", {"before": true, "after": true}],
        "line-comment-position": "off",
        "linebreak-style": ["error", "unix"],
        "max-depth": ["error", 6],
        "max-len": ["error", 120, {
            "ignoreComments": true,
            "ignoreTrailingComments": true,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
        }],
        "max-lines": ["error", {"max": 800}],
        "max-nested-callbacks": ["error", 6],
        "max-params": ["error", 3],
        "max-statements": "off",
        "max-statements-per-line": ["error", {"max": 1}],
        "multiline-ternary": "off",
        "new-parens": "off",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "off",
        "no-bitwise": ["error", {"int32Hint": true}],
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-case-declarations": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": ["error", {"allowParens": true}],
        "no-continue": "error",
        "no-console": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-class-assign": "error",
        "no-const-assign": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-duplicate-case": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-else-return": "error",
        "no-empty-pattern": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inner-declarations": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "error",
        "no-invalid-regexp": "error",
        "no-iterator": "error",
        "no-irregular-whitespace": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["&&", "||"],
                    ["in", "instanceof"],
                ],
                "allowSamePrecedence": true,
            }
        ],
        "no-mixed-requires": "off", // it would wait for better times
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-native-reassign": "error",
        "no-negated-condition": "error",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal-escape": "error",
        "no-octal": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "error",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": ["error", "always"],
        "no-return-await": "error",
        "no-self-assign": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "error",
        "no-sparse-arrays": "error",
        "no-sync": "off",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-this-before-super": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-undef": "error",
        "no-underscore-dangle": ["error", {"allow": ["_id"]}],
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-unused-vars": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-use-before-define": ["error", "nofunc"],
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": ["error", {"consistent": true}],
        "object-curly-spacing": ["error", "never"],
        "object-property-newline": "off",
        "object-shorthand": "error",
        "one-var": "off",
        "one-var-declaration-per-line": "error",
        "operator-assignment": ["error", "always"],
        "operator-linebreak": "error",
        "padded-blocks": "off",
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "error",
        "prefer-const": ["error", {"destructuring": "all"}],
        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}],
        "prefer-reflect": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": ["error", "as-needed"],
        "quotes": ["error", "single"],
        "radix": ["error", "as-needed"],
        "require-atomic-updates": "error",
        "require-await": "off",
        "require-yield": "error",
        "rest-spread-spacing": "error",
        "semi": "error",
        "semi-spacing": "error",
        "sort-imports": "error",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        "strict": ["error", "global"],
        "symbol-description": "error",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": "error",
        "unicode-bom": ["error", "never"],
        "use-isnan": "error",
        "valid-jsdoc": ["error", {
            "requireReturn": false,
            "requireReturnType": true,
            "requireParamDescription": false,
            "requireReturnDescription": false,
        }],
        "vars-on-top": "error",
        "valid-typeof": "error",
        "wrap-iife": "error",
        "wrap-regex": "off",
        "yield-star-spacing": "error",
        "yoda": ["error", "never"],
        "node/exports-style": "off",
        "node/no-unpublished-require": "off",
        "node/no-deprecated-api": "off", // rule does not check NodeJS version therefore works incorrect
        "sonarjs/no-duplicate-string": "off",
        "sonarjs/cognitive-complexity": "off",
    }
};
