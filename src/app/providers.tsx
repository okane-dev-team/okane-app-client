'use client';

import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { theme } from '@/configs';
import { Header, Loader } from '@/components';
import '../configs/i18n.config';
import '/node_modules/flag-icons/css/flag-icons.min.css';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loader />}>
      <CacheProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <Header />
            {children}
          </ChakraProvider>
        </QueryClientProvider>
      </CacheProvider>
    </Suspense>
  );
}
