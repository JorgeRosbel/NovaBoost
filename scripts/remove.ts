import { join } from 'path';
import fs from 'fs';
import { collections, type CollectionName } from '../src/collections';

const target = process.argv[2] as CollectionName;

const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';

if (!target) {
  console.error(
    `${RED}Please provide a collection name. Example: npm run remove -- reviews${RESET}`
  );
  process.exit(1);
} else if (!collections.includes(target)) {
  console.log(`${RED}${target} does not exist!${RESET}`);
  process.exit(1);
}

function removeFromConstArray(code: string, item: string) {
  // 1. Remove any line that has exactly the item in quotes, with optional trailing comma/spaces
  const lineRegex = new RegExp(`^[ \\t]*"${item}"\\s*,?\\s*$`, 'gm');
  let result = code.replace(lineRegex, '');

  // 2. Clean up any leftover blank lines inside the array
  result = result.replace(/(\[\s*\n)([\s\S]*?)(\n\s*\])/, (_, open, inner, close) => {
    // remove any empty lines in `inner`
    const cleanedInner = inner
      .split('\n')
      .filter((line: string) => line.trim() !== '')
      .join('\n');
    return open + cleanedInner + close;
  });

  return result;
}

function removeCollection(code: string, name: string) {
  // 1. Remove the defineCollection block for `export const <name> = defineCollection({...});`
  const blockRegex = new RegExp(
    // match "export const name = defineCollection({ ... });" including all inner content
    `export\\s+const\\s+${name}\\s*=\\s*defineCollection\\([\\s\\S]*?\\);\\s*\\n?`,
    'g'
  );
  let result = code.replace(blockRegex, '');

  // 2. Remove the property from the `collections` object
  //    e.g. lines like "  prueba," or "  prueba" (last entry)
  const propRegex = new RegExp(`([ \\t]*)(['"])?${name}\\2,?\\s*\\n`, 'g');
  result = result.replace(propRegex, '');

  return result;
}

async function deleteCollection(target: string) {
  const contentDir = join(process.cwd(), 'src/content', target);

  try {
    // Borra la carpeta y todo su contenido de forma recursiva
    await fs.promises.rm(contentDir, { recursive: true, force: true });
  } catch (err) {
    console.error(`❌ Error al borrar la carpeta "${target}":`, err);
  }
}

const content_config_path = join(process.cwd(), 'src/content.config.ts');
const collections_path = join(process.cwd(), 'src/collections.ts');

try {
  const collections = fs.readFileSync(collections_path, 'utf-8');
  const config_content = fs.readFileSync(content_config_path, 'utf-8');

  const new_config_content = removeCollection(config_content, target);
  const new_collections = removeFromConstArray(collections, target);
  deleteCollection(target);

  fs.writeFileSync(content_config_path, new_config_content);

  fs.writeFileSync(collections_path, new_collections);

  console.log(`${GREEN}Collection ${target} successfully removed${RESET}`);
} catch (error) {
  console.log(error);
}
