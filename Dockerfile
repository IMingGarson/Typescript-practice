FROM node:16-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force
ENV PATH=/app/node_modules/.bin:$PATH

COPY tsconfig.json ./

COPY . .

EXPOSE ${PORT}

RUN npm run build
RUN npx tsc
RUN npm run swagger-autogen

CMD ["npm", "run", "serve"]