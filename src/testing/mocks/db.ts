import { factory, manyOf, primaryKey } from '@mswjs/data';

const models = {
  user: {
    id: primaryKey(String),
    name: String,
    email: String,
    password: String,
    posts: manyOf('post'),
    createdAt: String,
    updatedAt: String
  },
  post: {
    id: primaryKey(String),
    title: String,
    content: String,
    slug: String,
    userId: String,
    createdAt: String,
    updatedAt: String
  }
};

export const db = factory(models);
