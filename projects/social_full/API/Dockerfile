FROM node:24-alpine3.21

WORKDIR /backend-expressjs

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY . .

EXPOSE 8800

CMD ["node","index.js"]
