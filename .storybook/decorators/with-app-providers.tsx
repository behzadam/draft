import type { Decorator, StoryFn } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { NextIntlProvider } from 'next-intl';
import React from 'react';
import { reactQueryOptions } from '../../src/lib/react-query';

export const withAppProviders: Decorator = (
  Story: StoryFn
) => (
  <NextIntlProvider locale="en">
    <QueryClientProvider
      client={new QueryClient(reactQueryOptions)}
    >
      <Story />
    </QueryClientProvider>
  </NextIntlProvider>
);
