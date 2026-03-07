FROM node:24

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY prisma ./prisma
RUN yarn prisma generate

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn","start:prod"]