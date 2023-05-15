import { getPostsHandler } from './get-posts';
import { getPostDetails } from './get-posts-details';

export const postsHandlers = [
  getPostsHandler,
  getPostDetails
];
