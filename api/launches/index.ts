import { LaunchesQuery, LaunchesQueryVariables } from "@/__generated__/graphql";
import { LAUNCHES_QUERY } from "@/graphql/launches";
import createApolloClient from "@/apollo-client";
import { ApolloQueryResult } from "@apollo/client";

export async function fetchAllLaunches(
  page: number
): Promise<ApolloQueryResult<LaunchesQuery>> {
  const client = createApolloClient();

  const variables: LaunchesQueryVariables = {
    limit: 10,
    offset: page * 10,
  };

  return await client.query<LaunchesQuery, LaunchesQueryVariables>({
    query: LAUNCHES_QUERY,
    variables,
  });
}
