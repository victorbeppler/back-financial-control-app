FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY . .

RUN npm install

RUN npx prisma generate

CMD ["npm", "run", "dev"]