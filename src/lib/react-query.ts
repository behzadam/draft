import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

export const reactQueryOptions = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      staleTime: 5000
    }
  }
};

export const getQueryClient = cache(
  () => new QueryClient(reactQueryOptions)
);
