import { faker } from '@faker-js/faker';

export const admin = {
  id: faker.datatype.uuid(),
  name: 'Behzad AM',
  email: 'behzad.am@gmail.com',
  password: '$fLUubMln_kLHFYL',
  createdAt: faker.date.recent().toISOString(),
  updatedAt: faker.date.recent().toISOString()
};
