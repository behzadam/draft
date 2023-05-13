import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { seedDatabase } from '@/testing/database/seeder';
import { server } from '@/testing/mocks/server';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
  seedDatabase();
});

afterEach(async () => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  queryClient.clear();
});
