import { LaunchesQuery } from "@/__generated__/graphql";
import { ArrayElement } from "@/lib/types";

export type LaunchQueryResult = ArrayElement<
  NonNullable<LaunchesQuery["launches"]>
>;
