import { type ImageTextCardProps } from '../components/ImageTextCard.astro';

import * as Core from './LANDING.md';

const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', { eager: true });

export const IMAGE_TEXT_CONTENT: ImageTextCardProps = {
  ...Core.frontmatter.imageText,
  cards: Core.frontmatter.imageText.cards.map(
    (item: { image: string; title: string; items: string[] }) => {
      const img = images[`../assets/${item.image}`] as { default: ImageMetadata };
      return { ...item, image: img.default };
    }
  ),
};
