// prettier.config.js

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
  // Aquí es donde cambia: usa el nombre del módulo como string
  plugins: ["prettier-plugin-astro"],
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