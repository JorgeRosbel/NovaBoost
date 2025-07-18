import { getAllPosts } from '../utils/get_all_posts';

import type { APIRoute } from 'astro';

// interface ISearch {
//   title: string;
//   description: string;
//   pubDate: string;
//   path: string;
// }

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();

  const data = posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    path: `/${post.collection}/${post.id}/`,
    image: post.data.heroImage?.src,
  }));

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
