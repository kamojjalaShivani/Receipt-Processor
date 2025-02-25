# Receipt Processor API

## Overview
This is a REST API that processes shopping receipts and calculates reward points based on specific rules.  
The API is containerized using Docker, making it easy to run and deploy.

## Features
- Process receipts and get a unique ID.
- Retrieve reward points based on receipt details.
- Runs in Docker for easy deployment.
- Built with Node.js and Express.js.

---

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/kamojjalaShivani/Receipt-Processor.git
cd Receipt-Processor

###
 **2. Install all dependencies**

npm install
To start the API server without Docker:
npm start
or using nodemon (for development):
npm run dev

### **3.Run the Docker Image**

3.1.Build the Docker Image
docker build -t receipts-api .
3.2. Run the Container
docker run -p 4000:4000 receipts-api
3.3.Check Running Containers
docker ps
3.4. Stop the Container
docker stop 2b54076cfd47
3.5. Remove a Container
docker rm 2b54076cfd47


