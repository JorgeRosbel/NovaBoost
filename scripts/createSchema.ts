
import { join } from 'path';
import fs from 'fs';

// Get the schema name from command line arguments
const schemaName = process.argv[2];

const alphanumericUnderscoreRegex = /^[a-zA-Z0-9_]+$/;

if (!schemaName) {
  console.error('Please provide a schema name. Example: npm run create-collection -- reviews');
  process.exit(1);
} else if (!alphanumericUnderscoreRegex.test(schemaName)) {
  console.error('Schema name can only contain alphanumeric characters and underscores (_).');
  process.exit(1);
}


let updatedContent = ""

// Template for the schema configuration
// const schemaTemplate = `

// export const ${schemaName} = defineCollection({
//   loader: glob({ base: './src/content/${schemaName}', pattern: '**/*.{md,mdx}' }),
//   schema: ({ image }) => z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//     heroImage: image().optional(),
//     tags: z.array(z.string()).optional(),


//   }),
// });
// `;


const schemaTemplate = `

export const ${schemaName} = defineCollection({
  loader: glob({ base: './src/content/${schemaName}', pattern: '**/*.{md,mdx}' }),
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
          .regex(/^https?:\\/\\/.+/, { message: 'El enlace debe usar http:// o https://.' })
          .optional(),
      })
      .optional(),
  }),
});
`;



// Path to the content config file
const configPath = join(process.cwd(), 'src/content.config.ts');


try {
  // Read the current config file
  let content = fs.readFileSync(configPath, 'utf-8');
  
  // Check if the schema already exists
  if (content.includes(`export const ${schemaName} =`)) {
    console.log(`Schema '${schemaName}' already exists in content.config.ts`);
    process.exit(0);
  }
  
  // Check if this is a fresh config file with just imports
  const isFreshConfig = !content.includes('export const collections');
  
  // Add the schema template
  if (isFreshConfig) {
    // For fresh config, create the complete structure
    updatedContent = `${content}

// ${schemaName} collection
${schemaTemplate}

// Collections export
export const collections = {
  ${schemaName},
};
`;
  } else {
    // For existing config, insert before the collections export
    const exportIndex = content.indexOf('export const collections');
    if (exportIndex === -1) {
      throw new Error('Could not find collections export in content.config.ts');
    }
    
    updatedContent = [
      content.slice(0, exportIndex),
      `// ${schemaName} collection\n${schemaTemplate}\n`,
      content.slice(exportIndex)
    ].join('');
    
    // Update the collections object to include the new schema
    const collectionsPattern = /collections = \{/;
    if (!collectionsPattern.test(updatedContent)) {
      throw new Error('Could not find collections object in content.config.ts');
    }
    
    updatedContent = updatedContent.replace(
      collectionsPattern,
      `collections = {\n  ${schemaName},`
    );

  }

  const collectionPath = join(process.cwd(), 'src/collections.ts');

  // 1. Leer el archivo como texto
  const fileContent = fs.readFileSync(collectionPath, 'utf-8');

  // 2. Extraer la lista de strings entre [ ... ]
  const match = fileContent.match(/export const collections = \[\s*([\s\S]*?)\s*\]/);
  let currentCollections: string[] = [];

  if (match) {
    currentCollections = match[1]
      .split(',')
      .map(s => s.trim().replace(/["']/g, ''))
      .filter(Boolean);
  }

  // 3. Agregar schemaName si no está presente
  if (!currentCollections.includes(schemaName)) {
    currentCollections.push(schemaName);
  }

  // 4. Reconstruir el archivo
  const newFileContent = `export const collections = [
  ${currentCollections.map(c => `  "${c}",`).join('\n')}
  ] as const;

  export type CollectionName = typeof collections[number];
  `;

  // 5. Sobrescribir el archivo
  fs.writeFileSync(collectionPath, newFileContent, 'utf-8');

  
  // Write the updated content back to the file
  fs.writeFileSync(configPath, updatedContent);
  
  // Create the content directory if it doesn't exist
  const contentDir = join(process.cwd(), 'src/content', schemaName);
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  const RESET = "\x1b[0m";
  const BLUE  = "\x1b[34m";
  const GREEN = "\x1b[32m";
  const RED   = "\x1b[31m";


  console.log(`${GREEN}Successfully created ${schemaName} schema and updated content.config.ts${RESET}`);
  console.log(`${GREEN}Created directory: src/content/${schemaName}${RESET}`);
  console.log(`${GREEN}Collections updated with: ${currentCollections.join(', ')}${RESET}`);


} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
