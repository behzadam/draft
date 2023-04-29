import { API_URL } from '@/config/constants';
import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { PostDetailsDto } from '../types/post-details-dto';

export const getPostDetails = (
  slug: string
): Promise<Result<PostDetailsDto>> => {
  return apiClient.get(`${API_URL}/posts/${slug}`);
};

export const useGetPostDetails = (slug: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ['posts', slug],
    queryFn: () => getPostDetails(slug),
    enabled: !!slug
  });

  return {
    result: data,
    isFetching
  };
};
