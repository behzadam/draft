import {
  PostDetails,
  getPostsDetails
} from '@/features/site/post';
import { getQueryClient } from '@/lib/react-query';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // const result = await getPostsDetails(params.slug);
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
    () => getPostsDetails(params.slug)
  );
  return <PostDetails slug={params.slug} />;
}
