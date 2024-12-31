"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

import { GlobalContextProvider } from "@/context/useGlobalDataContext";
import client from "@/graphql/client";
import { store } from "@/redux/store";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

function Client({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </QueryClientProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default Client;
