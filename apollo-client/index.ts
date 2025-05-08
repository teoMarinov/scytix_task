import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  });
};

export default createApolloClient;
