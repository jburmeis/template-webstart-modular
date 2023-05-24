# webstart-project-name
*This project has been set up with [this template](webstart-template-url) on webstart-project-setupdate.*

# Project Information
This initial README is only intended to get you started with a new project. 
You should edit this file to contain just the information an external developer needs to know about your project.
- What is it about?
- What do I need to run it?
- What other resources are related to it?
- ...

# Project Structure
This project consists of one or more independant sub-projects below this root directory. See the README docs in the respective projects for details.
- `/frontend` The web frontend interface (TypeScript)

The template is set up initially as a frontend-only web application. This is how the application is executed:
- **Development** The application is served by the webpack dev server (configuration in `frontend/buildtools/webpack`)
- **Production** The application is build by webpack into a bundle that can be placed on every common web server. The dockerfile uses an nginx server (configuration in `frontend/buildtools/nginx`)

## Adding Backend Services
A common use case is to extend the frontend with application with backend microservices, each in their own sub-project. This is how you extend the repository:
1. Add a new project directory. Each sub-project should have a Dockerfile at the root, so that all projects can be build from the root (see section on deployment below). The Node.js (TypeScript) or Fast API (Python) templates are potential options.
2. Integrate the project into the build process:
⋅⋅1. **Docker-compose**: Extend the `docker-compose.yml` at the root as described there.
..2. **GitLab CI**: Extend the `gilab-ci.yml` at the root as described there.
3. Forward API requests to the backend service in the frontend web servers:
..1 **Development**: Edit the `frontend/buildtools/webpack/config.dev.js` configuration as described there.
..2 **Production**: Edit the `frontend/buildtools/nginx/nginx.conf` configuration as described there.

# Development
See the README docs in the individual projects how each project can be started for development.

# Production Builds
This project is intended to come together as one application, consisting of its independant web services. For building and deploying the sub-projects for standalone usage, consider the projects' README docs. To build all parts together, Docker compose and CI scripts are convenient options.

## Docker Compose
The `docker-compose.yml` configuration can be used to build and run all services together. This is useful for local deployments or when running the application on a dedicated machine. The web application will be available on port 80. Start/stop the deployment with `docker-compose up/down` from the root directory.

## GitLab CI Builds
GitLab uses the `.gitlab-ci.yml` file to build the project in the GitLab CI process. This is useful if you want to continuously test, build (and deploy) the services on a dedicated GitLab build server.
In the initial setup the configuration only tests and builds the project. To build and push docker images uncomment the relevant stage and define some relevant CI/CD variables (Settings -> CI/CD -> Variables).


| Variable | Required | Type | Flag: Protected | Flag: Masked | Example |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| DOCKER_REGISTRY_URL | true | Variable | false | true | registry.my-organization.com:4445 |
| DOCKER_REGISTRY_USER | true | Variable | false | true | username |
| DOCKER_REGISTRY_PASS | true | Variable | false | true | password |
| IMAGE_NAME | true | Variable | false | false | webstart-project-id |
| NPM_RC | false | File | false | false | registry=https://registry.npmjs.org |

### Common Issues
When building locally on your system, the docker build system copies the `package-lock.json` from your sub-project root and runs `npm ci` by referencing this file. 
- If you have set your system to use another registry, place an `.npmrc` credentials file in the respective project folder, or inject it in the CI pipeline. Note that the dockerfile is set up in a way, that this will *not* be included in the final image.
- If you cannot provide a `package-lock.json` file in your build workflow, replace `npm ci` with `npm install` in the dockerfile. Note that you loose the certainty of reproducable builds this way.