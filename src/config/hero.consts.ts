// Hero configuration
// This object contains the configuration for the Hero component
// It includes the background image, main heading (h1), subheading (h2),
// and two buttons with their respective links and labels.


import type { Props } from "../components/Hero.astro"


import * as Core from "./LANDING.md"
const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', { eager: true });
const bg = images[`../assets/${Core.frontmatter.hero.backgroundImage}`] as { default: ImageMetadata };


export const HERO_CONFIG: Props = {
  backgroundImage: bg.default,
  h1: Core.frontmatter.hero.h1,
  h2: Core.frontmatter.hero.h2 ,
  button_1: Core.frontmatter.hero.button_1[0],
  button_2: Core.frontmatter.hero.button_2[0],
};
