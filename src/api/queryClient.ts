import { hanldeMutationError } from '@/utils/error';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 0,
    },
    mutations: {
      onError: hanldeMutationError,
    },
  },
});
