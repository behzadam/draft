'use client';

import { useGetPosts } from '../../api/get-posts';
import { PostListItem } from './post-list-item';
import { PostListSkeleton } from './post-list.skeleton';

export const PostList = (): JSX.Element => {
  const { result, isFetching } = useGetPosts();
  return (
    <section className="grid max-w-md grid-cols-1 mx-auto divide-y divide-gray-100">
      <h1 className="py-6 text-xl font-bold">Posts</h1>
      {isFetching ? (
        <PostListSkeleton />
      ) : (
        result?.data?.map((post) => {
          return (
            <PostListItem post={post} key={post.id} />
          );
        })
      )}
    </section>
  );
};
