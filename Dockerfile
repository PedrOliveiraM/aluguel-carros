FROM node:22

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

RUN npx prisma generate
RUN npx prisma db push
RUN npx prisma seed

# Exponha a porta em que a aplicação será executada
EXPOSE 4545

# Comando para iniciar a aplicação
CMD ["npm", "start"]