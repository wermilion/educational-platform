FROM node:20 AS build-stage
WORKDIR /workdir
COPY ./client/ .
RUN npm install
CMD npm run build

FROM nginx:alpine AS production-stage
WORKDIR /workdir
EXPOSE 3000
COPY ./client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /workdir/dist /workdir