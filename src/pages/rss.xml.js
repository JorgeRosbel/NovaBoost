import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config/site.consts';
import { getAllPosts } from '../utils/get_all_posts';

export async function GET(context) {
  const posts = await getAllPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map(post => ({
      ...post.data,
      link: `/${post.collection}/${post.id}/`,
    })),
  });
}
