FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN ls -la /app
RUN cat /app/package.json
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
