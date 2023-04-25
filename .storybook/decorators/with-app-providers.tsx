import type { Decorator, StoryFn } from '@storybook/react';
import React from 'react';
import { AppProviders } from '../../src/app/providers';

export const withAppProviders: Decorator = (
  Story: StoryFn
) => (
  <AppProviders>
    <Story />
  </AppProviders>
);
