FROM node:4

COPY . /src/
WORKDIR /src/

RUN npm install graygelf

ENTRYPOINT node /src/index.js
