# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /backend-expressjs

COPY package.json yarn.lock ./

RUN yarn config set network-timeout 3000000 && yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2: Production
FROM node:24-alpine

WORKDIR /backend-expressjs

ENV NODE_ENV=production

COPY package.json yarn.lock ./

RUN yarn config set network-timeout 3000000 && yarn install --frozen-lockfile --production

COPY --from=builder /backend-expressjs/dist ./dist

EXPOSE 8800

CMD ["yarn","start"]
