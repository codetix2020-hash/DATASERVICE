# Minimal production dockerfile
FROM node:20-alpine

WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm ci --only=production

# Build Next.js
COPY . .
RUN npm run build

# Expose and start
EXPOSE 3000
CMD ["npm", "start"]
