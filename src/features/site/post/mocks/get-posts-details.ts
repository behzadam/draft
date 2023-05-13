import { API_URL } from '@/config/constants';
import { db } from '@/testing/database/factory';
import { Result } from '@/types';
import { rest } from 'msw';
import { PostDetailsDto } from '../types/post-details-dto';

export const getPostDetails = rest.get(
  `${API_URL}/posts/:slug`,
  async (req, res, ctx) => {
    const slug = req.params.slug as string;
    const post = db.post.findFirst({
      where: {
        slug: {
          equals: slug
        }
      }
    });

    if (!post) {
      const result = Result.failure({
        message: 'Post not found'
      });
      return res(
        ctx.status(404),
        ctx.delay(300),
        ctx.json(result)
      );
    }

    const postDetails: PostDetailsDto = {
      id: post.id,
      title: post.title,
      content: post.content,
      slug: post.slug,
      createdAt: post.createdAt
    };

    const result = Result.success({ data: postDetails });
    return res(
      ctx.status(200),
      ctx.delay(300),
      ctx.json(result)
    );
  }
);
