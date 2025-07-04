#!/usr/bin/env node
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get the schema name from command line arguments
const schemaName = process.argv[2];

if (!schemaName) {
  console.error('Please provide a schema name. Example: npm run create-schema -- reviews');
  process.exit(1);
}


const slugTemplate = `---
import { type CollectionEntry, getCollection } from 'astro:content';
import BlogPost from '../../layouts/BlogPost.astro';
import { render } from 'astro:content';

export async function getStaticPaths() {
	const posts = await getCollection('${schemaName}');
	return posts.map((post) => ({
		params: { slug: post.id },
		props: post,
	}));
}
type Props = CollectionEntry<'${schemaName}'>;

const post = Astro.props;
const { Content } = await render(post);
---

<BlogPost {...post.data}>
	<Content />
</BlogPost>

`

let updatedContent = ""

// Template for the schema configuration
const schemaTemplate = `

export const ${schemaName} = defineCollection({
  loader: glob({ base: './src/content/${schemaName}', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional()
  }),
});
`;

// Get the current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
  
  // Write the updated content back to the file
  fs.writeFileSync(configPath, updatedContent);
  
  // Create the content directory if it doesn't exist
  const contentDir = join(process.cwd(), 'src/content', schemaName);
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  const pagePath = join(process.cwd(), 'src/pages', schemaName);
  if (!fs.existsSync(pagePath)) {
    fs.mkdirSync(pagePath, { recursive: true });
  }
  fs.writeFileSync(join(pagePath, '[...slug].astro'), slugTemplate);
  
  console.log(`✅ Successfully created ${schemaName} schema and updated content.config.ts`);
  console.log(`📁 Created directory: src/content/${schemaName}`);
  console.log(`📁 Created directory: src/pages/${schemaName}`);

} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
