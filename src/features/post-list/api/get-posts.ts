import { API_URL } from '@/config/constants';
import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { PostListItemDto } from '../types/post-list-item-dto';

export const getPosts = (): Promise<
  Result<PostListItemDto[]>
> => {
  return apiClient.get(`${API_URL}/posts`);
};
