import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { Post } from '../types/post';

export const getPostDetails = (
  postId: string
): Promise<Result<Post[]>> => {
  return apiClient.get(`/posts/${postId}`);
};

export const useGetPostDetails = (postId: string) => {
  const { data, isLoading } = useQuery<Result<Post[]>>({
    queryKey: ['post', postId],
    queryFn: () => getPostDetails(postId),
    initialData: () => Result.success({ data: [] })
  });

  return {
    result: data,
    isLoading
  };
};
