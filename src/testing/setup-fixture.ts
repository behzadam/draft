import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { queryClient } from '@/lib/react-query';
import { seed } from '@/testing/mocks/seed';
import { server } from '@/testing/mocks/server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
  seed();
});

afterAll(() => server.close());

afterEach(async () => {
  queryClient.clear();
  server.resetHandlers();
});
