import { IS_SERVER } from '@/config/constants';
import { seed } from './seed';

const initMocks = () => {
  if (IS_SERVER) {
    require('./server');
  } else {
    require('./browser');
  }
  seed();
};

initMocks();
