import { getPosts } from '@/features/post-list';
import { PostList } from '@/features/post-list/client';
import getQueryClient from '@/lib/react-query';
import { Hydrate, dehydrate } from '@tanstack/react-query';

export const metadata = {
  title: 'Draft | Post List',
  description: 'Post list page.'
};

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['posts'], getPosts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PostList />
    </Hydrate>
  );
}
