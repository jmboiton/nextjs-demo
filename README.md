# Next.JS Demo

This is a [Next.js](https://nextjs.org) project.

## Getting Started

### Requirements

- [pnpm](https://pnpm.io/): a package manager that offers to be more efficient than npm.
- [node.js](https://nodejs.org/) >= 18.20.4. It is suggested to use [pnpm env <command>](https://pnpm.io/cli/env) to switch between node versions. For example:

  ```bash
  $ pnpm env use -g 18.20.4
  ```

### Installation

- Install dependencies:

  ```bash
  $ pnpm i
  ```

- Setup environment variables
  - Duplicate the [.env.example](/.env.example) file, renaming it to just `.env` or `.env.local`.
  - Currently, the only variable needed for the application to run is `NEXT_PRIVATE_API_DOMAIN=http://localhost:3001`. Make sure to add it to the `.env` file. This is the domain used for the HTTP requests to the Mock REST API.

### Development

Run the Mock REST API and the development server of the application at the same time:

```bash
$ pnpm dev:all
```

If necessary, run only the Mock REST API with:

```bash
$ pnpm dev:api
```

It is also possible to run only the development server, but it requires to have the REST API running:

```bash
$ pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Tests

Run unit tests in watch mode

```bash
$ pnpm test
```

Generate a coverage report in the console

```bash
$ pnpm test:coverage
```

Generate and open a coverage report in the browser

```bash
$ pnpm test:coverage:ui
```
