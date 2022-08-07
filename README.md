 <p align="center">
  <img src="https://img.shields.io/static/v1?label=Clean-Arch TDD NextJs&message=Welcome&color=FFFFFF&labelColor=110C2F" alt="Unsplash welcome!" />
  <img alt="License" src="https://img.shields.io/static/v1?label=version&message=1.0&color=FFFFFF&labelColor=110C2F">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=FFFFFF&labelColor=110C2F">
  <img alt="Stars" src="https://img.shields.io/github/stars/yazaldefilimonepinto/clean-architecture-nextjs-tdd-boilerplate?color=FFFFFF&labelColor=110C2F">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/yazaldefilimonepinto/clean-architecture-nextjs-tdd-boilerplate?color=FFFFFF&labelColor=110C2F">
</p>

Simple Boilerplate with NextJs, Reactjs, TypeScript, TDD, Clean Architecture, and more.

## Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ⛑ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `~/` prefix
- ‽ Either Error Handler - For error handling. (Either is designed to hold either a left or a right value but never both).

## Quick Start

The best way to start with this template is using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```
# yarn
yarn create next-app -e https://github.com/yazaldefilimonepinto/clean-architecture-nextjs-tdd-boilerplate
# npm
npx create-next-app -e https://github.com/yazaldefilimonepinto/clean-architecture-nextjs-tdd-boilerplate
```

### Development

To start the project locally, run:

```bash
  npm dev
  our
  yarn dev
```

Open `http://localhost:3000` with your browser to see the result.


### Requirements

- Node.js >= 12.22.0
- npm our yarn

### Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.<br>
- [`test`](./test) — Application source code testing.

### Scripts
- `yarn/npm dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn/npm build` — Creates an optimized production build of your application.
- `yarn/npm start` — Starts the application in production mode.
- `yarn/npm lint` — Runs ESLint for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `~/` prefix.

```tsx
import { Button } from '~/components/Button';

// To import images or other files from the public folder
import avatar from '~/public/avatar.png';
```


<a id="license"></a>

## License

[MIT](https://github.com/yazaldefilimonepinto/clean-architecture-nextjs-tdd-boilerplate/blob/main/LICENSE) Project License

Creator with 💙 by [Yazalde Filimone](https://www.linkedin.com/in/yazalde-filimone/)

