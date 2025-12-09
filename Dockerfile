# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy package files
COPY package. json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile --production=false

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1-slim

WORKDIR /app

# Copy built application
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Start the application with Node.js
# (adapter-node tạo ra Node.js server, không phải Bun server)
CMD ["node", "build/index.js"]
