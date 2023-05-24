################### Stage 1: Build ###################
FROM node:20-slim as BUILD_STAGE

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy all from project root (see .dockerignore)
COPY . .

# Install dependencies from package-lock.json
RUN npm ci

# Create build
RUN npm run build

################### Stage 2: Production ###################
FROM nginx as PRODUCTION_STAGE

# Copy static website content to nginx dist directory
COPY --from=BUILD_STAGE usr/src/app/dist /usr/share/nginx/html

# Copy nginx config file
COPY ./buildtools/nginx/nginx.conf /etc/nginx/conf.d/default.conf