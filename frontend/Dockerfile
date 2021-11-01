FROM node:14

WORKDIR /app/frontend

COPY package*.json ./
RUN yarn install

COPY . .

CMD [ "yarn", "start" ]