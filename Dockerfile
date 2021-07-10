FROM node:alpine

WORKDIR /usr/app/
RUN chown -R node /usr/app/
USER node

COPY ./package.json ./yarn.lock ./

RUN yarn --frozen-lockfile

COPY ./ ./

RUN yarn build

EXPOSE ${HTTP_PORT:-3000}
CMD [ "yarn", "start" ]
