'use client';

import { Show } from '@/components/show';
import {
  PostDetails,
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
        <p>Loading...</p>
      ) : (
        <Show when={result?.data}>
          <PostDetails post={result?.data!} />
        </Show>
      )}
    </>
  );
}
