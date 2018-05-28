FROM mhart/alpine-node:8

RUN mkdir /src

WORKDIR /src
ADD ./package.json /src/package.json
RUN npm install

EXPOSE 8000

CMD npm start