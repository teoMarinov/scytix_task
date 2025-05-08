# Scytix Task

This is a **Next.js frontend application** built using **Material-UI (MUI)** and **Apollo Client for GraphQL**.

The app fetches launch data from the [SpaceX GraphQL API](https://github.com/r-spacex/SpaceX-API) with **server-side pagination**, **filtering by mission name**, and **sorting by launch date (newest first)**.

---

## 🚀 Features

- List all SpaceX launches with:
  - Server-side pagination
  - Filter by `mission_name`
  - Sort by `launch_date_local` (newest first)
- View detailed information about a specific launch using its `launch_id`
- Auto-generated TypeScript types from GraphQL using `codegen`

---

## 🧩 GraphQL Queries

### `LAUNCHES_QUERY`

```ts
export const LAUNCHES_QUERY = gql`
  query Launches(
    $limit: Int
    $offset: Int
    $find: LaunchFind
    $order: String
    $sort: String
  ) {
    launches(
      limit: $limit
      offset: $offset
      find: $find
      order: $order
      sort: $sort
    ) {
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
```

### `GET_LAUNCH_BY_ID`

```ts
export const GET_LAUNCH_BY_ID = gql`
  query LaunchById($launchId: ID!) {
    launch(id: $launchId) {
      mission_name
      launch_date_local
      rocket {
        rocket_name
        rocket_type
        rocket {
          description
        }
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
```

---

## 🛠 Getting Started

### Local Development

1. **Install dependencies**

```bash
npm install
```

2. **Set up environment variables**

Create a `.env` file in the root of the project and copy the contents of `.env.example`. Set the following:

```
NEXT_PUBLIC_BACKEND_URL=https://spacex-production.up.railway.app/
```

3. **Run the development server**

```bash
npm run dev
```

4. **(Optional) Generate GraphQL Types**

```bash
npm run generate
```

---

## 🐳 Running with Docker Compose

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Quick Start

1. **Build and run the app**

```bash
docker-compose up --build
```

2. **Visit the app**

```
http://localhost:3000
```

3. **Subsequent runs**

After the initial build, you can start it faster with:

```bash
docker-compose up
```

4. **Stopping the app**

To shut down the container:

```bash
docker-compose down
```

---

## 🗂 Folder Structure

```bash
.
├── __generated__       # Auto-generated GraphQL TypeScript types (via codegen)
├── api                 # HTTP services to interact with the GraphQL API
├── apollo-client       # Apollo Client instance and setup
├── app                 # Application routing and pages (Next.js)
├── components          # Reusable UI components
│   └── [ComponentName]
│       ├── index.tsx
│       ├── type.ts (optional)
│       ├── config.ts (optional)
│       ├── hook.ts (optional)
│       └── util.ts (optional)
├── graphQl             # GraphQL query definitions used in the API
├── lib                 # Shared utilities and global types
├── public              # Static assets (images, icons)
└── utils               # Generic utility functions
```