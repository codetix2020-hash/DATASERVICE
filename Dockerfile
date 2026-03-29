# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build Next.js
RUN npm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Copy entire built app from builder (everything needed for next start)
COPY --from=builder /app ./

# Expose port
EXPOSE 3000

# Start with PORT env var support - use node directly to execute next
CMD ["sh", "-c", "PORT=${PORT:-3000} node node_modules/.bin/next start"]
