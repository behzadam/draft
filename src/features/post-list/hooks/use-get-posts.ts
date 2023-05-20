import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/get-posts';

export const useGetPosts = () => {
  const { data: result, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  return {
    result,
    isFetching
  };
};
