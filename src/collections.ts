export const collections = [
   "gravimetry"
] as const;


export type CollectionName = typeof collections[number];