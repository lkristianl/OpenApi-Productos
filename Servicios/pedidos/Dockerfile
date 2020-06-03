FROM node:10

# Create API Mock Server directory
WORKDIR /api_mock/

RUN npm i -g @stoplight/prism-cli

COPY . .

EXPOSE 8080

CMD [ "prism", "mock", "-h", "0.0.0.0", "pedidos.json" ]