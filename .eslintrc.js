module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: "airbnb-base",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        indent: [
            "error",
            4
        ],
        linebreak: [
            "error",
            "unix"
        ],
        quotes: [
            "error",
            "double"
        ],
        semi: [
            "error",
            "always"
        ]
    }
};