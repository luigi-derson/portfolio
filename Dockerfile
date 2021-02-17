FROM node:current as deps

WORKDIR /src

COPY package-lock.json package.json ./

RUN npm install

FROM deps as build

WORKDIR /src

COPY . .
COPY --from=deps /src .

ENV PATH node_modules/.bin:$PATH
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /src/public /usr/share/nginx/html
COPY ./nginx /etc/nginx/conf.d

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
