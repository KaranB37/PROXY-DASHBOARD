import { CONFIG } from 'src/config-global';
import { getPosts } from 'src/actions/blog-ssr';

import { PostListHomeView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post list - ${CONFIG.appName}` };

export default async function Page() {
  try {
    const { posts } = await getPosts();

    if (!Array.isArray(posts)) {
      throw new Error('Expected posts to be an array');
    }

    return <PostListHomeView posts={posts} />;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return <div>Error loading posts</div>;
  }
}
