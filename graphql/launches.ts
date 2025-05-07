import { gql } from '@apollo/client';

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
        site_name_long
        site_id
      }
      launch_success
    }
  }
`;
