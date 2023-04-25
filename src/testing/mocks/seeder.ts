import * as fakeData from './data';
import { db } from './db';

export const seedMockDb = () => {
  const postCount = db.post.count();
  if (postCount > 0) return;

  fakeData.users.forEach((user) => db.user.create(user));
  fakeData.posts.forEach((post) => db.post.create(post));
};
