import * as Core from './LANDING.md';

const { image, text } = Core.frontmatter.banner;

const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', { eager: true });
const bg = images[`../assets/${image}`] as { default: ImageMetadata };

export const INFO_BG = bg.default;

export const INFO_TEXT = text;
