import {
  LaunchByIdQuery,
  LaunchesIdsQuery,
  LaunchesQuery,
  LaunchesQueryVariables,
} from "@/__generated__/graphql";
import {
  ALL_LAUCHES_ID_QUERY,
  GET_LAUNCH_BY_ID,
  LAUNCHES_QUERY,
} from "@/graphql/launches";
import createApolloClient from "@/apollo-client";
import { ApolloQueryResult } from "@apollo/client";

const client = createApolloClient();

export async function fetchAllLaunches(
  page: number
): Promise<ApolloQueryResult<LaunchesQuery>> {
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
  const { data } = await client.query<LaunchesIdsQuery>({
    query: ALL_LAUCHES_ID_QUERY,
  });

  const totalPages = Math.floor((data.launches?.length || 0) / 10);

  return totalPages;
}

export async function getLaunchById(
  launchId: string
): Promise<ApolloQueryResult<LaunchByIdQuery>> {
  const variables = {
    launchId,
  };

  return client.query<LaunchesIdsQuery>({
    query: GET_LAUNCH_BY_ID,
    variables,
  });
}
