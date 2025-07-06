export const collections = [
    "label: Home }",
  "archaeology",
  "environmental",
  "filtering",
  "geodesy",
  "geoelectrics",
  "gmtsar",
  "gravimetry",
  "inversion",
  "magnetometry",
  "mining",
  "modeling",
  "oasis",
  "oil_gas",
  "oq",
  "petrel",
  "seismology",
  "visualization",
  ] as const;

  export type CollectionName = typeof collections[number];
  