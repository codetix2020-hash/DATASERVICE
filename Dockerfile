FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.33.0

# Copy files
COPY . .

# Install dependencies
RUN npm install

# Build
RUN npm run build

# Expose
EXPOSE 3000

# Start
CMD ["npm", "start"]
