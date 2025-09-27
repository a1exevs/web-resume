# Web-resume

# Description
The project is a web resume for easy demonstration of the basic skills of a software engineer.

## Yarn version
v4.9.0
```bash
npm install -g corepack@0.31.0
corepack enable
yarn install
```

## Node version
v20.9.0. Use NVM:
1. nvm current - check current version of Node
2. nvm list - show list of available Node versions
3. nvm install <version> - to install and use Node version.
4. nvm use <version> - set version of Node as current version

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `yarn run dev`
Starts the application in development mode using `react-app-rewired start`.

### `yarn run build:local`
Builds the application locally with an empty `PUBLIC_URL`.

### `yarn run build`
Creates an optimized production build using `react-app-rewired build`.

### `yarn run predeploy`
Formats sources, runs lint checks and builds the project before deployment.

### `yarn run deploy`
Deploys the contents of the `build` folder to GitHub Pages.

### `yarn run serve`
Serves the static files from the `build` directory.

### `yarn run check-deps`
### `yarn run upgrade-deps`
Checks/updates available dependencies to the latest version.

### `yarn run format`
Formats code using Prettier for TypeScript, TSX, and CSS, SCSS files.

### `yarn run lint`
Runs ESLint for static code analysis on TypeScript and TSX files.

### `yarn run lint:fix`
Fixes errors found by ESLint in TypeScript and TSX files.

### `yarn test:unit`
Runs unit tests using the Jest configuration.

### `yarn test:unit-cov`
Runs unit tests with coverage calculation option.

### `yarn test:snap`
Runs snapshot tests using the Jest configuration.

### `yarn test:snap-cov`
Runs snapshot tests with coverage calculation option.

### `yarn test:snap-update`
Updates snap-data of snapshot tests.

### `yarn test:e2e`
Executes e2e tests (Playwright)

### `yarn test`
Sequentially executes unit tests, snapshot tests, integration tests, e2e tests.

### `yarn storybook`
Runs Storybook in development mode on port 6006.

### `yarn build-storybook`
Builds a static version of Storybook for deployment.

### `yarn chromatic`
Runs Chromatic to check for visual changes in components and exits with a code 0 even if changes are detected.

### `yarn docs`
Generates comprehensive documentation using TypeDoc.

### `yarn version:major`
Increments the major version in `package.json` and `src/app/manifest.json`.  
For example, changes `"version": "1.2.3"` to `"version": "2.0.0"`.

### `yarn version:minor`
Increments the minor version in `package.json` and `src/app/manifest.json`.  
For example, changes `"version": "1.2.3"` to `"version": "1.3.0"`.

### `yarn version:patch`
Increments the patch version in `package.json` and `src/app/manifest.json`.  
For example, changes `"version": "1.2.3"` to `"version": "1.2.4"`.

### `yarn update-version:major`
Automates the process of merging branches, increasing the major-version in the package.json file and manifest file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn update-version:minor`
Automates the process of merging branches, increasing the minor-version in the package.json file and manifest file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn update-version:patch`
Automates the process of merging branches, increasing the patch-version in the package.json file and manifest file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn e2e:install`
Installs Playwright deps.

### `yarn run postinstall`
Automatically runs after dependencies installation to set up git hooks through husky.

## Yarn version
v1.22.19

## Node version
v20.9.0. Use NVM:
1. nvm current - check current version of Node
2. nvm list - show list of available Node versions
3. nvm install <version> - to install and use Node version.
4. nvm use <version> - set version of Node as current version

## Repository

Link to repository https://github.com/a1exevs/web-resume.
