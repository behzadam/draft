import { API_URL } from '@/config/constants';
import { apiClient } from '@/lib/api-client';
import { Result } from '@/types';
import { PostDetailDto } from '../types/post-detail-dto';

export const getPostDetail = (
  slug: string
): Promise<Result<PostDetailDto>> => {
  return apiClient.get(`${API_URL}/posts/${slug}`);
};
