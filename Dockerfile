FROM node:18

WORKDIR /app

COPY . .

RUN ls -la /app
RUN cat /app/package.json
RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]
