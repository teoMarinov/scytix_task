import { gql } from "@apollo/client";

export const LAUNCHES_QUERY = gql`
  query Launches(
    $limit: Int
    $offset: Int
    $find: LaunchFind
    $order: String
    $sort: String
  ) {
    launches(
      limit: $limit
      find: $find
      offset: $offset
      order: $order
      sort: $sort
    ) {
      id
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
      launch_success
      links {
        flickr_images
      }
    }
  }
`;

export const ALL_LAUCHES_ID_QUERY = gql`
  query LaunchesIds {
    launches {
      id
    }
  }
`;

export const GET_LAUNCH_BY_ID = gql`
  query LaunchById($launchId: ID!) {
    launch(id: $launchId) {
      mission_name
      launch_date_local
      rocket {
        rocket_name
        rocket {
          description
        }
      }
      links {
        mission_patch
        video_link
        flickr_images
      }
      launch_success
    }
  }
`;
