# Getting Started

This project consists of a Next.js frontend and an Express.js backend API, designed to be run locally for development or deployed using Docker.

## Development

First, ensure you have Node.js and npm (or yarn/pnpm/bun) installed.

### 1. Frontend (Next.js)

Navigate to the project root and install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Next.js frontend. The page auto-updates as you edit the files in `src/app/`.

### 2. Backend (Express.js API)

Navigate to the `api` directory:

```bash
cd api
```

Install dependencies:

```bash
npm install
```

Then, run the API server:

```bash
npm run start
```

The Express API will typically run on [http://localhost:3001](http://localhost:3001) (check `api/src/index.ts` for the exact port).

## Docker

This project includes Dockerfiles for both the Next.js frontend and the Express.js API, along with a `docker-compose.yml` for easy orchestration.

### 1. Build and Run with Docker Compose

Ensure you have Docker and Docker Compose installed.

From the project root directory, run:

```bash
docker-compose up --build
```

This command will seamlessly build all necessary Docker images for both the frontend and backend services, and then start them. It's the recommended way to get your development environment fully up and running.

The Next.js frontend will be accessible at [http://localhost:3000](http://localhost:3000).
The Express.js API will be accessible at [http://localhost:3001](http://localhost:3001).

To run in detached mode (in the background):

```bash
docker-compose up -d --build
```

To stop the services:

```bash
docker-compose down
```