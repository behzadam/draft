import { API_URL } from '@/config/constants';
import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { Post } from '../types/post';

export const getPosts = (): Promise<Result<Post[]>> => {
  return apiClient.get(`${API_URL}/posts`);
};

export const useGetPosts = () => {
  const { data, isFetching } = useQuery<Result<Post[]>>({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialData: Result.success({ data: [] as Post[] })
  });

  return {
    result: data,
    isFetching
  };
};
