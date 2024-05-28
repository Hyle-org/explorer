FROM node:18-alpine
COPY ./ /explorer
WORKDIR /explorer
RUN yarn --ignore-engines && yarn build

FROM nginx:latest
RUN mkdir /explorer
COPY --from=0 /explorer/dist /explorer
COPY ./logos /explorer/logos
COPY nginx.conf /etc/nginx/nginx.conf