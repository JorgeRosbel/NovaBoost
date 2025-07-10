import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// general collection


export const general = defineCollection({
  loader: glob({ base: './src/content/general', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    affiliateBlock: z
      .object({
        text: z
          .string()
          .min(1, { message: 'El texto de afiliado no puede estar vacío.' })
          .max(500, { message: 'El texto de afiliado puede tener hasta 500 caracteres.' }),
        affiliateLink: z
          .string()
          .url({ message: 'Debe ser una URL válida.' })
          .regex(/^https?:\/\/.+/, { message: 'El enlace debe usar http:// o https://.' })
          .optional(),
      })
      .optional(),
  }),
});


// Collections export
// astro_base collection


export const astro_base = defineCollection({
  loader: glob({ base: './src/content/astro_base', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    affiliateBlock: z
      .object({
        text: z
          .string()
          .min(1, { message: 'El texto de afiliado no puede estar vacío.' })
          .max(500, { message: 'El texto de afiliado puede tener hasta 500 caracteres.' }),
        affiliateLink: z
          .string()
          .url({ message: 'Debe ser una URL válida.' })
          .regex(/^https?:\/\/.+/, { message: 'El enlace debe usar http:// o https://.' })
          .optional(),
      })
      .optional(),
  }),
});

// tailwindcss collection


export const tailwindcss = defineCollection({
  loader: glob({ base: './src/content/tailwindcss', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    affiliateBlock: z
      .object({
        text: z
          .string()
          .min(1, { message: 'El texto de afiliado no puede estar vacío.' })
          .max(500, { message: 'El texto de afiliado puede tener hasta 500 caracteres.' }),
        affiliateLink: z
          .string()
          .url({ message: 'Debe ser una URL válida.' })
          .regex(/^https?:\/\/.+/, { message: 'El enlace debe usar http:// o https://.' })
          .optional(),
      })
      .optional(),
  }),
});

// seo_performance collection


export const seo_performance = defineCollection({
  loader: glob({ base: './src/content/seo_performance', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    affiliateBlock: z
      .object({
        text: z
          .string()
          .min(1, { message: 'El texto de afiliado no puede estar vacío.' })
          .max(500, { message: 'El texto de afiliado puede tener hasta 500 caracteres.' }),
        affiliateLink: z
          .string()
          .url({ message: 'Debe ser una URL válida.' })
          .regex(/^https?:\/\/.+/, { message: 'El enlace debe usar http:// o https://.' })
          .optional(),
      })
      .optional(),
  }),
});

// ai_content collection


export const ai_content = defineCollection({
  loader: glob({ base: './src/content/ai_content', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    affiliateBlock: z
      .object({
        text: z
          .string()
          .min(1, { message: 'El texto de afiliado no puede estar vacío.' })
          .max(500, { message: 'El texto de afiliado puede tener hasta 500 caracteres.' }),
        affiliateLink: z
          .string()
          .url({ message: 'Debe ser una URL válida.' })
          .regex(/^https?:\/\/.+/, { message: 'El enlace debe usar http:// o https://.' })
          .optional(),
      })
      .optional(),
  }),
});

// prueba collection


// prueba collection


// prueba collection


export const collections = {
  ai_content,
  seo_performance,
  tailwindcss,
  astro_base,
  general,
};
