import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";


const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  baseDirectory: import.meta.url,
});

export default [
  { ignores: ["node_modules/**", "dist/**", ".astro/**", "*.config.js"]},
  
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended", 
    "prettier"
  ),
  { rules: { /* … */ } }
];
