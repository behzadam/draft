import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { getQueryClient } from '@/lib/react-query';
import { seedDatabase } from '@/testing/database/seeder';
import { server } from '@/testing/mocks/server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
  seedDatabase();
});

afterAll(() => server.close());

afterEach(async () => {
  const queryClient = getQueryClient();
  queryClient.clear();
  server.resetHandlers();
});
