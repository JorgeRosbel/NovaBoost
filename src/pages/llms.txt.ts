import { getAllPosts } from '../utils/get_all_posts';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config/site.consts';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getAllPosts();

  const lines = [
    `# ${SITE_TITLE}`,
    ``,
    `> ${SITE_DESCRIPTION}`,
    ``,
    `## Blog articles`,
    ...posts.map(post => {
      // Suponiendo que cada `post` tiene una propiedad `data.title`
      const title = post.data.title ?? post.id;
      const url = new URL(`/${post.collection}/${post.id}/`, site!).href;
      return `- [${title}](${url})`;
    }),
    ``,
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
