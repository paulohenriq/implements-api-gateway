FROM node:12.8.1-alpine

COPY index.js /usr/src/app/index.js
COPY package.json /usr/src/app/package.json

WORKDIR /usr/src/app
RUN npm install

WORKDIR /usr/src/app/

CMD [ "node", "index.js" ]

