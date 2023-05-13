import * as dataGenerator from '../data-generator';
import { db } from './factory';

function seedUsers(): void {
  const ifUserExists = db.user.findFirst({
    where: {
      id: {
        equals: dataGenerator.admin.id
      }
    }
  });
  if (!ifUserExists) {
    db.user.create(dataGenerator.admin);
  }
}

function seedPosts(): void {
  const postCount = db.post.count();
  if (postCount > 0) return;

  dataGenerator.randomPosts.forEach((post) =>
    db.post.create(post)
  );
}

export const seedDatabase = () => {
  seedUsers();
  seedPosts();
};
