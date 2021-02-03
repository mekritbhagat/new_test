FROM node:alpine

ENV PORT 3000

EXPOSE 3000

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .
RUN npm run start

CMD ["node", "dist/"]