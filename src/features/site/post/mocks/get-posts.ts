import { API_URL } from '@/config/constants';
import { db } from '@/testing/database/factory';
import { Result } from '@/types';
import { rest } from 'msw';

export const getPosts = rest.get(
  `${API_URL}/posts`,
  (_, res, ctx) => {
    const posts = db.post.getAll();
    const result = Result.success({ data: posts });
    return res(
      ctx.status(200),
      ctx.delay(300),
      ctx.json(result)
    );
  }
);
