import { getPostDetailHandler } from '@/features/post-detail';
import { getPostsHandler } from '@/features/post-list';

export const handlers = [
  getPostsHandler,
  getPostDetailHandler
];
