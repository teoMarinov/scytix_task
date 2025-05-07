import styles from "./page.module.css";
import createApolloClient from "@/apollo-client";
import { gql } from "@apollo/client";
import { Launch } from "@/__generated__/graphql";

export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query launches($limit: Int, $offset: Int) {
        launches(limit: $limit, offset: $offset) {
          id
          mission_name
        }
      }
    `,
    variables: {
      limit: 10,
      offset: 10,
    },
  });
  return (
    <div className={styles.page}>
      {data.launches.map((launch: Launch) => (
        <p key={launch.id}>{launch.mission_id}</p>
      ))}
    </div>
  );
}
