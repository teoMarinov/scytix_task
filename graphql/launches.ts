import { gql } from "@apollo/client";

export const LAUNCHES_QUERY = gql`
  query Launches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
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
  query LaunchById ($launchId: ID!) {
    launch(id: $launchId) {
      mission_name
      launch_date_local
      rocket {
        rocket_name
        rocket {
          description
        }
        rocket_type
      }
      links {
        mission_patch
        mission_patch_small
        video_link
        flickr_images
        reddit_launch
        article_link
        wikipedia
        reddit_recovery
        reddit_media
        reddit_campaign
        presskit
      }
      launch_success
    }
  }
`;
