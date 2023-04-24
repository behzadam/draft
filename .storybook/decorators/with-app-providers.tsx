import type { Decorator } from '@storybook/react';
import React from 'react';
import { AppProviders } from '../../src/app/providers';

export const withAppProviders: Decorator = (Story) => (
  <AppProviders>
    <Story />
  </AppProviders>
);
