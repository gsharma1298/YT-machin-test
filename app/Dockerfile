
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN addgroup -S nodegroup && \
    adduser -S nodeuser -G nodegroup

USER nodeuser

EXPOSE 3000

CMD ["npm", "start"]
