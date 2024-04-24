# FROM node:alpine

# WORKDIR /app

# COPY package.json yarn.lock ./

# RUN yarn install

# COPY . .

# RUN yarn build
# RUN yarn --ignore-engines

# EXPOSE 80

# CMD ["yarn", "serve"]

FROM node:alpine
COPY ./ /explorer
WORKDIR /explorer
RUN yarn install && yarn build

FROM nginx:latest
RUN mkdir /explorer
COPY --from=0 /explorer/dist /explorer
COPY ./logos /explorer/logos
COPY nginx.conf /etc/nginx/nginx.conf