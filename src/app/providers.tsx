'use client';

import { getQueryClient } from '@/lib/react-query';
import {
  Hydrate,
  QueryClientProvider,
  dehydrate
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

type Props = {
  children: ReactNode;
};
export const AppProviders = ({ children }: Props) => {
  const [queryClient] = useState(getQueryClient());
  const dehydratedState = dehydrate(queryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
