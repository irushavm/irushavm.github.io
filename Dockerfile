FROM node:10

RUN mkdir /app
ADD ./package.json /app/
ADD ./webpack.config.js /app/
ADD ./.babelrc /app/

WORKDIR /app

RUN npm install