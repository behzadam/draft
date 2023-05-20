import { PostDetailDto } from '@/features/post-detail';
import { db } from '../database/factory';
import { admin } from './users-generators';

export function getCurrentUserFirstPostDetails(): PostDetailDto | null {
  const post = db.post.findFirst({
    where: {
      userId: {
        equals: admin.id
      }
    }
  });
  if (!post) return null;
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    slug: post.slug,
    createdAt: post.createdAt
  };
}
