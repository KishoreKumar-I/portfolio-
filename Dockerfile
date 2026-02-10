FROM node:20-alpine AS base

WORKDIR /src

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com
RUN npm config set strict-ssl false

RUN npm install

COPY . .

CMD npm run dev
