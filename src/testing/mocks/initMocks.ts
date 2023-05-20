import { IS_SERVER } from '@/config/constants';
import { seedDatabase } from '../database/seeder';

export const initMocks = () => {
  if (IS_SERVER) {
    const { server } = require('./server');
    server.listen();
  } else {
    const { worker } = require('./browser');
    worker.start({
      onUnhandledRequest: 'bypass'
    });
  }
  seedDatabase();
};
