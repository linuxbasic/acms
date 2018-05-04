FROM node:9 as build
WORKDIR /app
COPY ./package.json /app/package.json
RUN yarn install

FROM node:9
WORKDIR /app
COPY . /app
COPY --from=build /app/node_modules /app/node_modules
CMD yarn start