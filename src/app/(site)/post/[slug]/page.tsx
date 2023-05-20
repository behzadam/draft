import { getPostDetail } from '@/features/post-detail';
import { PostDetail } from '@/features/post-detail/client';
import getQueryClient from '@/lib/react-query';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // const result = await getPostDetail(params.slug);
  // return {
  //   title: result?.data?.title,
  //   description: result?.data?.title
  // };
  return {
    title: 'MSW does not support this feature yet!'
  };
}

export default async function Page({
  params
}: {
  params: { slug: string };
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    ['posts', params.slug],
    () => getPostDetail(params.slug)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PostDetail slug={params.slug} />;
    </Hydrate>
  );
}
