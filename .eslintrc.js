module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "camelcase": 2,
    // "comma-dangle": [2, "never"],
    // "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "eol-last": 2,
  },
};
