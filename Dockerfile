# Dockerfile (tag: v3)
FROM mhart/alpine-node:8.9.1

# https://github.com/npm/npm/issues/16807#issuecomment-313591975
RUN yarn global add npm@6.0.1

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

CMD [ "npm", "run", "production" ]
