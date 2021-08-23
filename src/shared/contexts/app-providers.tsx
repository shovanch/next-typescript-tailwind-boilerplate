import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { AuthUserProvider } from "@/shared/contexts/useState.context";
import { InputValueProvider } from "@/shared/contexts/dispatch.context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

type AppProvidersProps = { children: React.ReactNode };

function ReactQueryClientProvider({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

function Providers({ children }: AppProvidersProps) {
  return (
    <>
      <AuthUserProvider>
        <InputValueProvider>{children}</InputValueProvider>
      </AuthUserProvider>
    </>
  );
}

function AppProviders({ children }: AppProvidersProps) {
  return (
    <>
      <ReactQueryClientProvider>
        <Providers>{children}</Providers>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryClientProvider>
    </>
  );
}

export { Providers, AppProviders, ReactQueryClientProvider };
