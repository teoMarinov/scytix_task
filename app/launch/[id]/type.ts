import { LaunchByIdQuery } from "@/__generated__/graphql";

export type LaunchById = LaunchByIdQuery["launch"];

export default interface LauchPageProps {
  params: Promise<{ id: string }>;
}
