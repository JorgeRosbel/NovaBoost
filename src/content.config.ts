import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// gravimetry collection


export const gravimetry = defineCollection({
  loader: glob({ base: './src/content/gravimetry', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
  }),
});


// Collections export
export const collections = {
  gravimetry,
};
