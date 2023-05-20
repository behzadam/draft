import { QueryClient } from '@tanstack/react-query';

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

const getQueryClient = () =>
  new QueryClient(reactQueryOptions);
export default getQueryClient;
