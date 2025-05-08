/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Launches(\n    $limit: Int\n    $offset: Int\n    $find: LaunchFind\n    $order: String\n    $sort: String\n  ) {\n    launches(\n      limit: $limit\n      offset: $offset\n      find: $find\n      order: $order\n      sort: $sort\n    ) {\n      id\n      mission_name\n      launch_date_local\n      rocket {\n        rocket_name\n      }\n      launch_site {\n        site_name\n      }\n      launch_success\n      links {\n        flickr_images\n      }\n    }\n  }\n": typeof types.LaunchesDocument,
    "\n  query LaunchesIds {\n    launches {\n      id\n    }\n  }\n": typeof types.LaunchesIdsDocument,
    "\n  query LaunchById($launchId: ID!) {\n    launch(id: $launchId) {\n      mission_name\n      launch_date_local\n      rocket {\n        rocket_name\n        rocket {\n          description\n        }\n        rocket_type\n      }\n      links {\n        mission_patch\n        mission_patch_small\n        video_link\n        flickr_images\n        reddit_launch\n        article_link\n        wikipedia\n        reddit_recovery\n        reddit_media\n        reddit_campaign\n        presskit\n      }\n      launch_success\n    }\n  }\n": typeof types.LaunchByIdDocument,
};
const documents: Documents = {
    "\n  query Launches(\n    $limit: Int\n    $offset: Int\n    $find: LaunchFind\n    $order: String\n    $sort: String\n  ) {\n    launches(\n      limit: $limit\n      offset: $offset\n      find: $find\n      order: $order\n      sort: $sort\n    ) {\n      id\n      mission_name\n      launch_date_local\n      rocket {\n        rocket_name\n      }\n      launch_site {\n        site_name\n      }\n      launch_success\n      links {\n        flickr_images\n      }\n    }\n  }\n": types.LaunchesDocument,
    "\n  query LaunchesIds {\n    launches {\n      id\n    }\n  }\n": types.LaunchesIdsDocument,
    "\n  query LaunchById($launchId: ID!) {\n    launch(id: $launchId) {\n      mission_name\n      launch_date_local\n      rocket {\n        rocket_name\n        rocket {\n          description\n        }\n        rocket_type\n      }\n      links {\n        mission_patch\n        mission_patch_small\n        video_link\n        flickr_images\n        reddit_launch\n        article_link\n        wikipedia\n        reddit_recovery\n        reddit_media\n        reddit_campaign\n        presskit\n      }\n      launch_success\n    }\n  }\n": types.LaunchByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Launches(\n    $limit: Int\n    $offset: Int\n    $find: LaunchFind\n    $order: String\n    $sort: String\n  ) {\n    launches(\n      limit: $limit\n      offset: $offset\n      find: $find\n      order: $order\n      sort: $sort\n    ) {\n      id\n      mission_name\n      launch_date_local\n      rocket {\n        rocket_name\n      }\n      launch_site {\n        site_name\n      }\n      launch_success\n      links {\n        flickr_images\n      }\n    }\n  }\n"): (typeof documents)["\n  query Launches(\n    $limit: Int\n    $offset: Int\n    $find: LaunchFind\n    $order: String\n    $sort: String\n  ) {\n    launches(\n      limit: $limit\n      offset: $offset\n      find: $find\n      order: $order\n      sort: $sort\n    ) {\n      id\n      mission_name\n      launch_date_local\n      rocket {\n        rocket_name\n      }\n      launch_site {\n        site_name\n      }\n      launch_success\n      links {\n        flickr_images\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query LaunchesIds {\n    launches {\n      id\n    }\n  }\n"): (typeof documents)["\n  query LaunchesIds {\n    launches {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query LaunchById($launchId: ID!) {\n    launch(id: $launchId) {\n      mission_name\n      launch_date_local\n      rocket {\n        rocket_name\n        rocket {\n          description\n        }\n        rocket_type\n      }\n      links {\n        mission_patch\n        mission_patch_small\n        video_link\n        flickr_images\n        reddit_launch\n        article_link\n        wikipedia\n        reddit_recovery\n        reddit_media\n        reddit_campaign\n        presskit\n      }\n      launch_success\n    }\n  }\n"): (typeof documents)["\n  query LaunchById($launchId: ID!) {\n    launch(id: $launchId) {\n      mission_name\n      launch_date_local\n      rocket {\n        rocket_name\n        rocket {\n          description\n        }\n        rocket_type\n      }\n      links {\n        mission_patch\n        mission_patch_small\n        video_link\n        flickr_images\n        reddit_launch\n        article_link\n        wikipedia\n        reddit_recovery\n        reddit_media\n        reddit_campaign\n        presskit\n      }\n      launch_success\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;