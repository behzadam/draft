import type { Decorator, StoryFn } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from 'react';
import { reactQueryOptions } from '../../src/lib/react-query';

export const withAppProviders: Decorator = (
  Story: StoryFn
) => (
  <QueryClientProvider
    client={new QueryClient(reactQueryOptions)}
  >
    <Story />
  </QueryClientProvider>
);
