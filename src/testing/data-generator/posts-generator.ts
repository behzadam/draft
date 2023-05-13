import { Post } from '@/features/site/post';
import { faker } from '@faker-js/faker';
import { admin } from './users-generators';

function generateRandomPost(): Post {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(4),
    slug: faker.lorem.slug(),
    userId: admin.id,
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString()
  };
}

export const randomPosts = Array.from({ length: 40 }).map(
  () => generateRandomPost()
);
