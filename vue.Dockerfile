FROM node:20.14 as node

ARG DEBUG=false

WORKDIR /workdir

COPY package*.json .

RUN npm install

COPY . .

RUN if [ "$DEBUG" != "true" ]; then npm run build; fi

CMD npm run serve

FROM nginx:alpine as web-server

COPY --from=node /workdir/dist /workdir

RUN echo $'server {                           \n\
    listen       80;                          \n\
    listen  [::]:80;                          \n\
    server_name  localhost;                   \n\
    location / {                              \n\
        root   /workdir;                      \n\
        index  index.html index.htm;          \n\
        try_files $uri $uri/ /index.html;     \n\
    }                                         \n\
    error_page   500 502 503 504  /50x.html;  \n\
    location = /50x.html {                    \n\
        root   /workdir;                      \n\
    }                                         \n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]