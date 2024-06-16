# Use the official Node.js image as the base image
FROM node:20
# Set the working directory inside the container
WORKDIR D:/cloud
# Set the working directory inside the container
COPY package*.json ./
# Install the application dependencies
RUN npm install
# Copy the application source code
COPY . .
# Expose the port the app runs on
ENV PORT=3000
EXPOSE 3000
# Command to run the application
CMD ["node", "server.js"]