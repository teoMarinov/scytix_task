import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://spacex-production.up.railway.app/",
  documents: ["**/*.tsx"],
  generates: {
    "./__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
        "./__generated__/types.ts": {
          plugins: ["typescript", "typescript-operations"],
        },
  },
};

export default config;
