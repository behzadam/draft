import { Post } from '@/features/site/post';
import { faker } from '@faker-js/faker';

export const users = [
  {
    id: '716dc0dc-9de5-40f9-9db9-f0d15962c2b6',
    name: 'Behzad AM',
    email: 'behzad.am@gmail.com',
    password: '$fLUubMln_kLHFYL',
    createdAt: '2023-02-10 05:28:30.769',
    updatedAt: '2023-02-10 09:20:07.323'
  }
];

function createRandomPost(userId: string): Post {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(4),
    userId: userId,
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString()
  };
}

export const posts = Array.from({ length: 40 }).map(() => {
  return createRandomPost(users[0].id);
});
