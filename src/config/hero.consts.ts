// Hero configuration
// This object contains the configuration for the Hero component
// It includes the background image, main heading (h1), subheading (h2),
// and two buttons with their respective links and labels.
import HeroImage from '../assets/hero.webp';
import type { Props } from "../components/Hero.astro"

export const HERO_CONFIG: Props = {
  backgroundImage: HeroImage,
  h1: "NovaBoost: Ignite Your Stellar Blog",
  h2: "A blazing‑fast Astro 5.10.2 & TailwindCSS template, SEO‑optimized and AI‑powered for effortless content creation",
  button_1: {
    href: "/#",
    label: "Call to Action 1",
  },
  button_2: {
    href: "/#",
    label: "Call to Action 2",
  },
};
