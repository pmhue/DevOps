# Stage 1: Build
FROM node:24-alpine3.21 AS builder

WORKDIR /frontend-reactjs

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2: Production
FROM nginx:1.27-alpine3.21

COPY --from=builder /frontend-reactjs/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
