'use client';

import { Lato } from 'next/font/google';
import { useGetPosts } from '../../api/get-posts';
import { PostListItem } from './post-list-item';
import { PostListSkeleton } from './post-list-skeleton';

export const subHeadingFont = Lato({
  subsets: ['latin'],
  weight: '300'
});

export const PostList = (): JSX.Element => {
  const { result, isFetching } = useGetPosts();
  return (
    <section className="container grid max-w-screen-lg grid-cols-1">
      <header className="py-8 text-center">
        <p
          className={`${subHeadingFont.className} py-3 text-sm`}
        >
          Front-End Next.js Architecture
        </p>
        <h1 className="mx-auto text-5xl font-black">
          Draft Blog Posts
        </h1>
      </header>
      <section className="divide-y divide-gray-100">
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
    </section>
  );
};
