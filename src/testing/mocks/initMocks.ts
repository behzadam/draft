import { IS_SERVER } from '@/config/constants';
import { seedDatabase } from '../database/seeder';
import { worker } from './browser';
import { server } from './server';

export const initMocks = () => {
  if (IS_SERVER) {
    server.listen();
  } else {
    worker.start({
      onUnhandledRequest: 'bypass'
    });
  }
  seedDatabase();
};
