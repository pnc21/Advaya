# Build stage: Use Node.js to build the project
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the code and build the project
COPY . .
RUN npm run build

# Production stage: Serve the built files with Nginx
FROM nginx:alpine
# Copy the build output (assumed to be in the "dist" folder)
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 inside the container
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
