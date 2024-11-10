"use client";
import React, { ReactNode } from "react";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";
import { GlobalContextProvider } from "@/context/useGlobalDataContext";

function Client({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default Client;
