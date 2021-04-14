FROM node:latest

RUN mkdir /usr/share/runner

COPY . /usr/share/runner

WORKDIR /usr/share/runner

RUN yarn install

CMD ["node", "simpeserver.js"]