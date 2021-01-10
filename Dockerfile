FROM node:lts-alpine as deps

WORKDIR /src

COPY yarn.lock package.json ./

RUN yarn install --production --frozen-lockfile

FROM node:lts-alpine as build

WORKDIR /src

COPY . .
COPY --from=deps /src .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /src/build /usr/share/nginx/html
COPY ./nginx /etc/nginx/conf.d

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
