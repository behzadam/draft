'use client';

import { Show } from '@/components/show';
import {
  PostDetails,
  PostDetailsSkeleton,
  useGetPostDetails
} from '@/features/site/post';

export default function PostDetailsPage({
  params
}: {
  params: { slug: string };
}) {
  const { result, isFetching } = useGetPostDetails(
    params.slug
  );

  return (
    <>
      {isFetching ? (
        <PostDetailsSkeleton />
      ) : (
        <Show when={result?.data}>
          <PostDetails post={result?.data!} />
        </Show>
      )}
    </>
  );
}
