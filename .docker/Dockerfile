FROM node:18.15.0-alpine3.17

ENV ROOT_HOME=/root \
    HOME=/home/node \
    PATH="/home/node/.npm-global/bin:${PATH}" \
    NPM_CONFIG_PREFIX=/home/node/.npm-global \
    NPM_CONFIG_LOGLEVEL=warn \
    APP_PATH=/usr/app

RUN apk add -qU --no-cache git

USER node

RUN npm set progress=false && \
    npm config set sign-git-tag false && \
    npm config set git-tag-version false && \
    npm cache clear --force && \
    npm install -g npm@9.6.1

USER root

COPY . $APP_PATH

RUN chown node:node -R $APP_PATH

USER node

WORKDIR $APP_PATH

RUN npm ci && \
    npm run lint && \
    npm run build
