'use client';

import { Show } from '@/components/show';
import { useGetPostsDetails } from '../../api/get-posts-details';
import { PostDetailsSkeleton } from './post-details.skeleton';

type Props = {
  slug: string;
};
export const PostDetails = ({ slug }: Props) => {
  const { result, isFetching } = useGetPostsDetails(slug);

  return (
    <>
      <Show when={isFetching}>
        <PostDetailsSkeleton />
      </Show>
      <Show when={!isFetching && result}>
        <article className="prose xl:prose-xl">
          <h2>{result?.data?.title}</h2>
          <time className="text">
            {result?.data?.createdAt}
          </time>
          <section>{result?.data?.content}</section>
        </article>
      </Show>
    </>
  );
};
