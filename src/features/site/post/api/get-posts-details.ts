import { API_URL } from '@/config/constants';
import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { isDefined } from 'yotils';
import { POST_LIST_QUERY_KEY } from '../constants';
import { PostDetailsDto } from '../types/post-details-dto';

export const getPostsDetails = (
  slug: string
): Promise<Result<PostDetailsDto>> => {
  return apiClient.get(`${API_URL}/posts/${slug}`);
};

export const useGetPostsDetails = (slug: string) => {
  const { data: result, isFetching } = useQuery({
    queryKey: [POST_LIST_QUERY_KEY, slug],
    queryFn: () => getPostsDetails(slug),
    enabled: isDefined(slug)
  });

  return {
    result,
    isFetching
  };
};
