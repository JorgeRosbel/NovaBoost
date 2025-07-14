export const collections = [
  'general',
  'astro_base',
  'tailwindcss',
  'seo_performance',
  'ai_content',
] as const;

export type CollectionName = (typeof collections)[number];
