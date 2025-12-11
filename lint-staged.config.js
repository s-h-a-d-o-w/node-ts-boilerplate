export default {
  "**/*.{mjs,js,ts}": "eslint --cache --cache-strategy metadata",
  "**/*.ts": () => "tsgo",
};
