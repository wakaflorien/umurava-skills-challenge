# Project env
FROM node:20-alpine

# Container directory
WORKDIR /app

#  Copy my file to Container
COPY . .

# Install packages
RUN npm install

# container port
EXPOSE 3000

# last command to run the project
CMD ["npm","run", "dev"]