# Stage 1. Build.

FROM node:16-alpine as build

WORKDIR /documentation

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

# Stage 2.

FROM nginx:1.25-alpine-slim

COPY --from=build /documentation/docs/.vitepress/dist/ /usr/share/nginx/html/

EXPOSE 80
