import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { getQueryClient } from '@/lib/react-query';
import { seedMockDb } from '@/testing/mocks/seeder';
import { server } from '@/testing/mocks/server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
  seedMockDb();
});

afterAll(() => server.close());

afterEach(async () => {
  const queryClient = getQueryClient();
  queryClient.clear();
  server.resetHandlers();
});
