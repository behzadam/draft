import { IS_SERVER } from '@/config/constants';
import { seedMockDb } from './seeder';

export const initMocks = () => {
  if (IS_SERVER) {
    require('./server');
  } else {
    require('./browser');
  }
  seedMockDb();
};
