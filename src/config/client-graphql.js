import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  typePolicies: {
    Query: {
      fields: {
        contatos: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
