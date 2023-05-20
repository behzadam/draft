'use client';

import getQueryClient from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextIntlProvider } from 'next-intl';
import { ReactNode } from 'react';

export const AppProviders = ({
  children
}: {
  children: ReactNode;
}) => {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <NextIntlProvider locale="en">
        {children}
      </NextIntlProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
