# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Build TS
RUN npm run build

# Start app
CMD ["npm", "start"]
