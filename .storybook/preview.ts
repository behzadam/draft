import type { Preview } from '@storybook/react';
import {
  initialize,
  mswDecorator
} from 'msw-storybook-addon';
import '../src/app/globals.css';
import { withAppProviders } from './decorators';

initialize();

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
  decorators: [mswDecorator, withAppProviders]
};

export default preview;
