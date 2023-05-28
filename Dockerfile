FROM node:18-alpine
WORKDIR /usr/src/app
COPY todo/package.json ./
RUN npm update -g npm
