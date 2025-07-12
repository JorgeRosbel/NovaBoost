import { glob }       from 'glob';
import fs              from 'fs/promises';
import matter          from 'gray-matter';
import { dirname, resolve } from 'path';

export interface ISearch {
  title: string;
  description:string;
  pubDate:string;
  path:string;
}

const RESET = "\x1b[0m";
const GREEN = "\x1b[32m";

async function main() {
  const files = await glob('./src/content/**/*.{astro,md}');
  const index:ISearch[] = [];

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf-8');
 
    const dir =  dirname(resolve(process.cwd(), file))

    const { data } = matter(raw);
    index.push({
      title:       data.title  || 'Sin título',
      description: data.description || '',
      pubDate: data.pubDate || '',
      path:`/${dir.split("/").at(-1)}/${file.split("/").at(-1)?.slice(0,-3)}/`
    });
  }

  await fs.writeFile(
    './public/search-index.json',
    JSON.stringify(index)
  );
  console.log(`${GREEN}search-index.json generated with ${index.length} entries${RESET}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
