import {
  LAUNCHES_QUERY,
  GET_LAUNCH_BY_ID,
  ALL_LAUCHES_ID_QUERY,
} from "@/graphql/launches";
import {
  LaunchesQuery,
  LaunchByIdQuery,
  LaunchesIdsQuery,
  LaunchesQueryVariables,
} from "@/__generated__/graphql";
import createApolloClient from "@/apollo-client";
import { ApolloQueryResult } from "@apollo/client";

export async function fetchAllLaunches(
  page: number,
  missionName?: string
): Promise<ApolloQueryResult<LaunchesQuery>> {
  const client = createApolloClient();

  const variables: LaunchesQueryVariables = {
    limit: 10,
    offset: page * 10,
    find: {
      mission_name: missionName,
    },
    order: "launch_date_local",
    sort: "ASC",
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

  return totalPages;
}

export async function getLaunchById(
  launchId: string
): Promise<ApolloQueryResult<LaunchByIdQuery>> {
  const client = createApolloClient();

  const variables = {
    launchId,
  };

  return client.query<LaunchesIdsQuery>({
    variables,
    query: GET_LAUNCH_BY_ID,
  });
}
