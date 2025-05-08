import { ArrayElement } from "@/lib/types";
import { LaunchesQuery } from "@/__generated__/graphql";

export type LaunchQueryResult = ArrayElement<
  NonNullable<LaunchesQuery["launches"]>
>;

export default interface HomeProps {
  searchParams: Promise<{ page?: string; mission_name?: string }>;
}
