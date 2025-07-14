
import { join} from 'path';
import fs from 'fs';
import { readdir, rm } from 'fs/promises';

async function emptyDir(dir: string) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map(entry => rm(join(dir, entry), { recursive: true, force: true }))
  );
}

// export async function resetPages(dir: string): Promise<void> {
//   const entries = await readdir(dir);

//   await Promise.all(entries.map(async (entry) => {
//     const fullPath = join(dir, entry);
//     const stat = await lstat(fullPath);

//     // Sólo directorios distintos de "tags"
//     if (stat.isDirectory() && entry !== 'tags') {
//       await rm(fullPath, { recursive: true, force: true });
//       console.log(`🗑️  Borrada carpeta: ${fullPath}`);
//     }
//   }));
// }


const base_content_config =`import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';`

const base_collections = `export const collections = [

  ] as const;

  export type CollectionName = typeof collections[number];`

const content_config_path = join(process.cwd(), 'src/content.config.ts');
const collections_path = join(process.cwd(), 'src/collections.ts');


try{
    // Remove the content directory and its contents
    emptyDir(join(process.cwd(), 'src/content'));
    console.log('✅Content directory cleared.');

    // Reset the content.config.ts file
    fs.writeFileSync(content_config_path , base_content_config );
    console.log('✅Content config file reset.');

    // Reset the collections.ts file
    fs.writeFileSync(collections_path , base_collections );
    console.log('✅Collections file reset.');

    // // Reset the pages directory
    // resetPages(join(process.cwd(), 'src/pages'));

}catch (error) {
  console.error('Error:', error);
}