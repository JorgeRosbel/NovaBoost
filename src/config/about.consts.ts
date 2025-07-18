import * as Core from './LANDING.md';
import { type AboutProps } from '../components/AboutUs.astro';

const { image } = Core.frontmatter.about;

const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', { eager: true });
const img = images[`../assets/${image}`] as {
  default: ImageMetadata;
};

export const ABOUT_CONTENT: AboutProps = {
  ...Core.frontmatter.about,
  image: img.default,
};
