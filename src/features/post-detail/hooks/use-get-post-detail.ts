import { useQuery } from '@tanstack/react-query';
import { isDefined } from 'yotils';
import { getPostDetail } from '../api/get-post-detail';

export const useGetPostDetail = (slug: string) => {
  const { data: result, isFetching } = useQuery({
    queryKey: ['posts', slug],
    queryFn: () => getPostDetail(slug),
    enabled: isDefined(slug)
  });

  return {
    result,
    isFetching
  };
};
