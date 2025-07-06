import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';



// archaeology collection


export const archaeology = defineCollection({
  loader: glob({ base: './src/content/archaeology', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});


// Collections export
// environmental collection


export const environmental = defineCollection({
  loader: glob({ base: './src/content/environmental', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// filtering collection


export const filtering = defineCollection({
  loader: glob({ base: './src/content/filtering', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// geodesy collection


export const geodesy = defineCollection({
  loader: glob({ base: './src/content/geodesy', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// geoelectrics collection


export const geoelectrics = defineCollection({
  loader: glob({ base: './src/content/geoelectrics', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// gmtsar collection


export const gmtsar = defineCollection({
  loader: glob({ base: './src/content/gmtsar', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// gravimetry collection


export const gravimetry = defineCollection({
  loader: glob({ base: './src/content/gravimetry', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// inversion collection


export const inversion = defineCollection({
  loader: glob({ base: './src/content/inversion', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// magnetometry collection


export const magnetometry = defineCollection({
  loader: glob({ base: './src/content/magnetometry', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// mining collection


export const mining = defineCollection({
  loader: glob({ base: './src/content/mining', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// modeling collection


export const modeling = defineCollection({
  loader: glob({ base: './src/content/modeling', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// oasis collection


export const oasis = defineCollection({
  loader: glob({ base: './src/content/oasis', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// oil_gas collection


export const oil_gas = defineCollection({
  loader: glob({ base: './src/content/oil_gas', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// oq collection


export const oq = defineCollection({
  loader: glob({ base: './src/content/oq', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// petrel collection


export const petrel = defineCollection({
  loader: glob({ base: './src/content/petrel', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// seismology collection


export const seismology = defineCollection({
  loader: glob({ base: './src/content/seismology', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

// visualization collection


export const visualization = defineCollection({
  loader: glob({ base: './src/content/visualization', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});

export const collections = {
  visualization,
  seismology,
  petrel,
  oq,
  oil_gas,
  oasis,
  modeling,
  mining,
  magnetometry,
  inversion,
  gravimetry,
  gmtsar,
  geoelectrics,
  geodesy,
  filtering,
  environmental,
  archaeology,
};
