# Imagem oficial do Node
FROM node:20

WORKDIR /app

COPY package*.json ./

# Instalar as dependências
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]