# 07 - File Upload API

Taken from John Smilga - Node Course - Section 11 - File Upload API

## Description

Full stack App (API and HTML frontend) providing file/image upload functionality when creating new Products.

## Tech stack

### backend

- node
- express
- mongoose
- mongoDB
- cloudinary
- express-fileupload
- nodemon

- express-async-errors
- express-rate-limit
- dotenv
- helmet
- http-status-codes
- rate-limiter
- xss-clean

## Usage

- set up a cloudinary account and get from dashboard: CLOUD_NAME, CLOUD_API_KEY & CLOUD_API_SECRET

- copy repo files to local directory
- npm install
- configure .env file with PORT, MONGO_URI, CLOUD_NAME, CLOUD_API_KEY &
  CLOUD_API_SECRET

* PORT is the port the backend API server will run on
* MONGO_URI is the mongoDB database connection string (ensure to include the database name, username and password)
* CLOUD_NAME, CLOUD_API_KEY &
  CLOUD_API_SECRET are taken from the cloudinary dashboard

- npm run dev
- connect with localhost:5000

#### Cloudinary

- create a folder for the image files to be uploaded to
- configure this folder in .env CLOUD_FOLDER
