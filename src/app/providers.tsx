import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

export const AppProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    {children}
  </QueryClientProvider>;
};
