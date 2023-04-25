'use client';

import {
  PostList,
  useGetPosts
} from '@/features/site/post';

export default function Site() {
  const { result, isLoading } = useGetPosts();
  if (isLoading) return <p>Loading...</p>;
  return <PostList posts={result.data!!} />;
}
