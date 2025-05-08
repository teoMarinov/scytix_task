# [Scytix Task 🔗](https://scytix-task.vercel.app/)

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

### Environment Setup

1. Create a `.env` file in the root directory:
    ```bash
    cp .env.example .env
    ```

2. Set the required environment variable in `.env`:

    ```env
    NEXT_PUBLIC_BACKEND_URL=https://spacex-production.up.railway.app/
    ```

---

## 🐳 Running with Docker Compose

### Requirements

- [Docker](https://www.docker.com/) (optional, for containerized setup)
- [Docker Compose](https://docs.docker.com/compose/) (for multi-container management)

1. **Build and run the app**:

    ```bash
    docker-compose up --build
    ```

2. **Access the app**:

    Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Subsequent runs** (after the first build):

    ```bash
    docker-compose up
    ```

4. **Stop the app**:

    ```bash
    docker-compose down
    ```

> ℹ️ Environment variables will be loaded from your `.env` file using `env_file` in Docker Compose.

---

## 💻 Running Locally with npm

### Requirements

- [Node.js](https://nodejs.org/) (version 18 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)
 

1. **Install dependencies**:

    ```bash
    npm install
    ```

2. **Run the development server**:

    ```bash
    npm run dev
    ```

3. **(Optional) Generate GraphQL types**:

    ```bash
    npm run generate
    ```

> The app will be available at [http://localhost:3000](http://localhost:3000)

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