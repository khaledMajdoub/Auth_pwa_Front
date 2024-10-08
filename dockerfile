#dockerize this app
FROM node:12.18.3-alpine3.12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "run" ,"dev"]
EXPOSE 8080
