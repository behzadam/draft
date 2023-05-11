import { API_URL } from '@/config/constants';
import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { POST_LIST_QUERY_KEY } from '../constants';
import { Post } from '../types/post';

export const getPosts = (): Promise<Result<Post[]>> => {
  return apiClient.get(`${API_URL}/posts`);
};

export const useGetPosts = () => {
  const { data, isFetching } = useQuery<Result<Post[]>>({
    queryKey: [POST_LIST_QUERY_KEY],
    queryFn: getPosts
  });

  return {
    result: data,
    isFetching
  };
};
