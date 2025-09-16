# Etapa 1: build da aplicação
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: imagem final
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=build /app/dist ./dist
COPY prisma ./prisma

# Gere o Prisma Client no container final
RUN npx prisma generate

EXPOSE 3500

CMD ["node", "dist/index.js"]
