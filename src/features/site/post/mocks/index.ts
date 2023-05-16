import { getPostsHandler } from './get-posts';
import { getPostDetailsHandler } from './get-posts-details';

export const postsHandlers = [
  getPostsHandler,
  getPostDetailsHandler
];
