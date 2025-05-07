import {
  LaunchesIdsQuery,
  LaunchesQuery,
  LaunchesQueryVariables,
} from "@/__generated__/graphql";
import { ALL_LAUCHES_ID_QUERY, LAUNCHES_QUERY } from "@/graphql/launches";
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

export async function getAllLauchesCount(): Promise<number> {
  const client = createApolloClient();

  const { data } = await client.query<LaunchesIdsQuery>({
    query: ALL_LAUCHES_ID_QUERY,
  });

  const totalPages = Math.floor((data.launches?.length || 0) / 10);

  return totalPages
}
