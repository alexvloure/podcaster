import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theme-provider';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { LoadingProvider } from './loading';

export const AppProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  const localStoragePersister = createSyncStoragePersister({
    storage: window.localStorage,
    key: 'podcaster-data',
  });

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{
            persister: localStoragePersister,
            maxAge: 1000 * 60 * 60 * 24, // 24 hours
          }}>
          <LoadingProvider>{children}</LoadingProvider>
        </PersistQueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
