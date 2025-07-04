import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';





// tamales collection


export const tamales = defineCollection({
  loader: glob({ base: './src/content/tamales', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    // Add any custom fields for tamales here
  }),
});


// Collections export
// categorias collection


export const categorias = defineCollection({
  loader: glob({ base: './src/content/categorias', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    // Add any custom fields for categorias here
  }),
});

export const collections = {
  categorias,
  tamales,
};
