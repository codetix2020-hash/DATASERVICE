FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN npm prune --production

# For standalone mode, we need .next/static in the standalone directory
RUN cp -r .next/static .next/standalone/.next/

EXPOSE 3000
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

CMD ["sh", "-c", "cd /app && node .next/standalone/server.js"]
