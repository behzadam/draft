import { API_URL } from '@/config/constants';
import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { isDefined } from 'yotils';
import { PostDetailsDto } from '../types/post-details-dto';

export const getPostsDetails = (
  slug: string
): Promise<Result<PostDetailsDto>> => {
  return apiClient.get(`${API_URL}/posts/${slug}`);
};

export const useGetPostsDetails = (slug: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ['posts', slug],
    queryFn: () => getPostsDetails(slug),
    enabled: isDefined(slug)
  });

  return {
    result: data,
    isFetching
  };
};
