// prettier.config.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const astroPlugin = require("prettier-plugin-astro");

/** @type {import("prettier").Options} */
export default {
  // Reglas generales
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "avoid",
  plugins: [astroPlugin],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
    {
      files: "*.{ts,tsx,js,jsx}",
      options: { parser: "typescript" },
    },
  ],
};
