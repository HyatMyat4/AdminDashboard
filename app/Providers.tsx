"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
function Providers({ children }: { children: React.ReactNode }) {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          FoodProducts: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          projects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider enableSystem={true} attribute="class">
            {children}
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default Providers;
