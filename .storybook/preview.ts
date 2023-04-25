import type { Preview } from '@storybook/react';
import {
  mswDecorator,
  initialize as mswInitialize
} from 'msw-storybook-addon';
import '../src/app/globals.css';
import { handlers } from '../src/testing/mocks/handlers';
import { seedMockDb } from '../src/testing/mocks/seeder';
import { withAppProviders } from './decorators';

mswInitialize();
seedMockDb();

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
    }
  },
  decorators: [withAppProviders, mswDecorator]
};

preview.parameters = {
  msw: {
    handlers: handlers
  }
};

export default preview;
