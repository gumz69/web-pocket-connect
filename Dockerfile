FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install --ignore-scripts && -g @angular/cli

CMD ["ng", "serve", "--host", "0.0.0.0"]
