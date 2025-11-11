# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Instalar dependências
RUN npm install

# Gerar cliente Prisma
RUN npx prisma generate

# Compilar TypeScript
RUN npm run build

# Expor porta
EXPOSE 3000

# Rodar app
CMD ["node", "dist/index.js"]