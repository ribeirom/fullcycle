FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./
COPY views /usr/src/app/views

RUN npm install \
    npm install moniker \
    npm install consolidate \
    npm install ejs

COPY . . 

EXPOSE 3000

CMD ["node","index.js"]