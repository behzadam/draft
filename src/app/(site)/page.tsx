'use client';

import {
  PostList,
  PostListSkeleton,
  useGetPosts
} from '@/features/site/post';

export default function Site() {
  const { result, isFetching } = useGetPosts();
  return (
    <section className="grid max-w-md grid-cols-1 mx-auto divide-y divide-gray-100">
      <h1 className="py-6 text-xl font-bold">Posts</h1>
      {isFetching ? (
        <PostListSkeleton />
      ) : (
        <PostList posts={result.data} />
      )}
    </section>
  );
}
