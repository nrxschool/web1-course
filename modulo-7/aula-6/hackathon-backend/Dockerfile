FROM node:20-alpine3.18

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY ./package.json ./package-lock.json ./
RUN npm i --omit=dev

COPY . .
EXPOSE 3000

CMD [ "node", "server.js"]