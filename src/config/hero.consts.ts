// Hero configuration
// This object contains the configuration for the Hero component
// It includes the background image, main heading (h1), subheading (h2),
// and two buttons with their respective links and labels.
import HeroImage from '../assets/hero.webp';
import type { Props } from "../components/Hero.astro"

export const HERO_CONFIG:Props  = {
  backgroundImage: HeroImage,
  h1: "Inside the Planet: Cutting‑Edge Insights in Geophysics",
  h2: "How seismic waves, gravity surveys, and magnetics reveal our planet’s secrets",
  button_1: {
    href: "/methods",
    label: "Explore Geophysics",
  },
  button_2: {
    href: "/applications",
    label: "Methods & Applications",
  },
};