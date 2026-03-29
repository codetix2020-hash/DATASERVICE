FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Copy standalone server + static files for standalone mode
RUN mkdir -p .next/standalone/.next && \
    cp -r .next/static .next/standalone/.next/

EXPOSE 3000
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

WORKDIR /app/.next/standalone
CMD ["node", "server.js"]
