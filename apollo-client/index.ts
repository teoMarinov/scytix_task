import { ApolloClient, InMemoryCache } from "@apollo/client";
let counter = 0;
const createApolloClient = () => {
  counter++;
  console.log(counter);
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_URL,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
