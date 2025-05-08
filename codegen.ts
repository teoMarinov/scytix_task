import dotenv from "dotenv";
import { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_BACKEND_URL,
  documents: ["graphql/*.ts"],
  generates: {
    "./__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
