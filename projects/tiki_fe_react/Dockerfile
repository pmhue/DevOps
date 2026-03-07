FROM node:24

WORKDIR /nextjs

# Chỉ copy tệp cấu hình trước để build nhanh hơn ở những lần sau
COPY package.json package-lock.json* ./

RUN npm config set fetch-timeout 300000
RUN npm config set fetch-retry-maxtimeout 300000
RUN npm install

# Copy toàn bộ code (trừ các mục trong .dockerignore)
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]