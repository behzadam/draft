import type { Preview } from '@storybook/react';
import {
  mswDecorator,
  initialize as mswInitialize
} from 'msw-storybook-addon';
import '../src/app/globals.css';
import { seedDatabase } from '../src/testing/database/seeder';
import { handlers } from '../src/testing/mocks/handlers';
import { withAppProviders } from './decorators';

mswInitialize({
  onUnhandledRequest: 'bypass'
});

seedDatabase();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    nextjs: {
      appDirectory: true
    },
    msw: {
      handlers: handlers
    }
  },
  decorators: [withAppProviders, mswDecorator]
};

export default preview;
