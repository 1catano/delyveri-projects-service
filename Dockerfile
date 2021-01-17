# Start with a Node.js base image that uses Node v13
FROM node:14
WORKDIR /usr/src/app

# Copy the package.json file to the container and install fresh node_modules
COPY package*.json tsconfig*.json ./
RUN yarn

# Copy the rest of the application source code to the container
COPY src/ src/

# Transpile typescript and bundle the project
RUN yarn build

# Remove the original src directory (our new compiled source is in the `dist` folder)
RUN rm -r src

EXPOSE 8080
# Assign `npm run start:prod` as the default command to run when booting the container
CMD ["yarn", "start:prod"]