# webstart-project-name
*This project has been set up with [this template](webstart-template-url) on webstart-project-setupdate.*

# Project Information
This initial README is only intended to get you started with a new project. 
You should edit this file to contain just the information an external developer needs to know about your project.
- What is it about?
- What do I need to run it?
- What other resources are related to it?
- ...

# Development
```
// Initial setup
npm install

// Start development server on http://localhost:3000
// You can edit the source files for instant feedback
npm start

// Development tools
npm run test        // Test suites
npm run lint        // Static code analysis
npm run format      // Code style formatting
```

# Production Builds
## Custom Web Servers
```
// Compile and bundle project (outputs to /dist)
// Place this in your web server's publish directory
npm run build
```

## Docker Builds
```
docker build -t webstart-project-id .
docker run -p 80:80 -d webstart-project-id
```

### Common issues
When building locally on your system, the docker build system copies the `package-lock.json` from your project root and runs `npm ci` by referencing this file. 
- If you have set your system to use another registry, place an `.npmrc` credentials file in the root folder, or inject it in the CI pipeline. Note that the dockerfile is set up in a way, that this will *not* be included in the final image.
- If you cannot provide a `package-lock.json` file in your build workflow, replace `npm ci` with `npm install` in the dockerfile. Note that you loose the certainty of reproducable builds this way.

# Source Directory Structure
## General Project configuration
- `package.json`: The primary definition file of the project. Includes dependencies and general project information.
- `tsconfig.json`: Configuration file for the TypeScript compiler
- `.babelrc`: Configuration file for the Babel transpiler
- `.eslintrc`, `.eslintignore`: Configuration file for ESLint (linter)
- `jest.config.ts`: Configuration file for Jest (unit testing)

## Source Files
The actual source files are all located in `/src`. The project is organized into:
- `/application`: Recommended location to place application logic (independant of UI)
- `/components`: Contains the user interface components. More specifically:
- `/components/App`: Components making up the fundamental structure of the web application 
- `/components/Pages`: Components for the actual pages of the application
- `/components/Common`: Components that are commonly used throughout the application
- `/config`: Global configuration settings (Theming, Routes)
- `/store`: The global state management of the application
- `/types`: Contains TypeScript definitions of asset datatypes, so they can be imported without errors

## Test Files
The `/tests` directory contains the unit test suites. Jest will pick up any file with the pattern `*.test.ts` in this directory.

## Build process files
These following files control the build process.
- `Dockerfile`: Configuration file to build a docker image
- `.dockerignore`: Tells docker which files to ignore while building the docker image
- `/buildtools/webpack`: The webpack configuration for development and production mode
- `/buildtools/nginx`: The configuration for the nginx web server used in the docker image

# Starter Resources
If you are new to this project, here are some resources to get started with the technology stack:
- TypeScript (Development Language): https://www.typescriptlang.org/
- React (UI Framework): https://reactjs.org/
- Material UI (UI Library): https://mui.com/
- Redux (Application Store): https://redux.js.org/
- Redux Toolkit (Support for Redux): https://redux-toolkit.js.org/
- Jest (Unit Testing): https://jestjs.io/
- NPM (Package Manager): https://docs.npmjs.com/
- Node.JS (JavaScript Runtime Environment): https://nodejs.dev/learn/