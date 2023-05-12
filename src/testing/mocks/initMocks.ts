import { IS_SERVER } from '@/config/constants';
import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { seedMockDb } from './seeder';

export const initMocks = () => {
  if (IS_SERVER) {
    const server = setupServer(...handlers);
    server.listen();
  } else {
    const worker = setupWorker(...handlers);
    worker.start({
      onUnhandledRequest: 'bypass'
    });
  }
  seedMockDb();
};
