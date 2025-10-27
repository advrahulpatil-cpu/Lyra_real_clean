FROM node:18

WORKDIR /app

COPY . .

RUN npm install || true

EXPOSE 3000
CMD ["node", "index.js"]
