// import { AuthProvider } from "./auth";
import ProviderAuth from "./auth";
import MovieProvider from "./movie";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type TypeProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: TypeProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderAuth>
        <MovieProvider>{children}</MovieProvider>
      </ProviderAuth>
    </QueryClientProvider>
  );
}

export default AppProvider;
