FROM node:18.0.0-alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5002
CMD ["npm", "start"]
