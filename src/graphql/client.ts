// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
export const strApi = "https://g2g-cms.souravbapari.in";
// Load the API key from environment variables
const API_KEY = process.env.GRAPHQL_KEY; // Make sure to define this in .env.local

// Create an HTTP link to your GraphQL endpoint
const httpLink = new HttpLink({
  uri: strApi + "/graphql", // Replace with your GraphQL endpoint
});

// Add the API key to the request headers using setContext
const authLink = setContext((_, { headers }) => {
  return {
    next: { revalidate: 0 },
    headers: {
      ...headers,
      Authorization: `Bearer ${API_KEY}`, // Or 'x-api-key' depending on the API requirement
      fetchPolicy: "no-cache",
    },
  };
});

// Combine authLink and httpLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default client;
