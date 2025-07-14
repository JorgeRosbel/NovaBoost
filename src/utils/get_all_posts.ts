import { collections, type CollectionName } from '../collections';
import { getCollection } from 'astro:content';

type Posts = Awaited<ReturnType<typeof getCollection>>;

export const getAllPosts = async (): Promise<Posts> => {
  try {
    const postsByCollection = await Promise.all(
      collections.map((collection: CollectionName) => getCollection(collection))
    );
    const allPosts = postsByCollection.flat();

    const sortedPosts = [...allPosts].sort((a, b) => {
      const da = new Date(a.data.pubDate).getTime();
      const db = new Date(b.data.pubDate).getTime();
      return db - da; // newer dates (larger timestamps) come first
    });

    return sortedPosts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
