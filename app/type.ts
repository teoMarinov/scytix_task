import { ArrayElement } from "@/lib/types";
import { LaunchesQuery } from "@/__generated__/graphql";

export type LaunchQueryResult = ArrayElement<
  NonNullable<LaunchesQuery["launches"]>
>;
