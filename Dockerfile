FROM node:20
RUN node --version
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]