FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN npm prune --production

# Copy static for standalone mode
RUN cp -r .next/static .next/standalone/.next/ || true

EXPOSE 3000
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

CMD ["sh", "-c", "PORT=${PORT:-3000} node .next/standalone/server.js"]
