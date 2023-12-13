# Build Stage
FROM oven/bun as builder
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
CMD [ "bun", "/app/index.ts" ]

