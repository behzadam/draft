import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { Post } from '../types/post';

export const getPosts = (): Promise<Result<Post[]>> => {
  return apiClient.get('/posts');
};

export const useGetPosts = () => {
  const { data, isLoading } = useQuery<Result<Post[]>>({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
    initialData: () => Result.success({ data: [] })
  });

  return {
    result: data,
    isLoading
  };
};
