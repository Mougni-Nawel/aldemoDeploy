# ENVIRONNEMENT DEXECUTION
FROM node:18.12.0-alpine

# definir the directory app
WORKDIR /app

# copy the package json to install dependencies
COPY  package.json .

# intall the dependencies
RUN npm install

# copy all files from current dir to /app in container
COPY . .

# expose the port 3000
EXPOSE 3000

# run the command to start the app
CMD ["npm", "run", "start"]