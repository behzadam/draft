import {
  POST_LIST_QUERY_KEY,
  PostList,
  getPosts
} from '@/features/site/post';
import { getQueryClient } from '@/lib/react-query';

export const metadata = {
  title: 'Draft | Post List',
  description: 'Post list page.'
};

export default async function Site() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    [POST_LIST_QUERY_KEY],
    getPosts
  );
  return <PostList />;
}
