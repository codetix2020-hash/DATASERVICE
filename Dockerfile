FROM node:20-alpine

WORKDIR /app

# Install all dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Use next standalone
CMD ["node", ".next/standalone/server.js"]
