FROM node:16-alpine3.17

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install --production

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.js"]
