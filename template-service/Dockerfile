#Use Node.js
FROM node:18-alpine

#Set working directory
WORKDIR /app

#Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm Install

# Copy rest of the code
COPY . .

# Expose port 
EXPOSE 5001

# Run the app
CMD ["node", "index.js"]
