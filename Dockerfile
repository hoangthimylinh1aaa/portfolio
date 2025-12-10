FROM oven/bun:1 as base
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source
COPY . .

# Build
RUN bun run build

# Production
FROM oven/bun:1-slim
WORKDIR /app

COPY --from=base /app/build ./build
COPY --from=base /app/package.json ./
COPY --from=base /app/node_modules ./node_modules

ENV PORT=3000
EXPOSE 3000

CMD ["bun", "run", "build/index.js"]
