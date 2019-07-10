FROM node:10.16.0-alpine

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install -g forever

RUN npm install

COPY . .