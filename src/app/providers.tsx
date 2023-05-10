'use client';

import { getQueryClient } from '@/lib/react-query';
import {
  Hydrate,
  QueryClientProvider,
  dehydrate
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const AppProviders = ({ children }: Props) => {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};
