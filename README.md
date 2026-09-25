# Login and Register Auth Backend

A simple Node.js authentication backend that provides registration and login endpoints using Express, MongoDB, Mongoose, and bcrypt.

## Features

- User registration
- User login
- Password hashing with bcrypt
- Password comparison during login
- MongoDB persistence through Mongoose
- JSON request handling
- CORS support
- Automatic server restart during development with Nodemon

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- CORS
- Nodemon

## Prerequisites

Before running the project, install:

- Node.js and npm
- MongoDB running locally
- Git

The application currently connects to MongoDB using:

```text
mongodb://localhost:27017/employee
```

## Installation

Clone the repository:

```bash
git clone https://github.com/oma452/login-and-register-with-auth-backend.git
cd login-and-register-with-auth-backend
```

Install dependencies:

```bash
npm install
```

Start MongoDB locally, then start the backend:

```bash
npm start
```

The server runs on:

```text
http://localhost:3001
```

## API Endpoints

### Register

```http
POST /register
Content-Type: application/json
```

Request body:

```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```

The password is hashed with bcrypt before it is stored in MongoDB.

### Login

```http
POST /login
Content-Type: application/json
```

Request body:

```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```

Possible responses include:

- `success`
- `The password is incorrect`
- `No record exists`

## Data Model

Users are stored in the `employee` MongoDB database through the `Employee` model.

The model contains:

- `name`
- `email`
- `password`

Passwords should never be stored as plain text. This project hashes passwords before saving them.

## Project Structure

```text
.
├── index.js
├── models/
│   └── Employee.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Development

The `start` script uses Nodemon:

```bash
npm start
```

Nodemon automatically restarts the server when source files change.

## Testing

No automated tests are currently configured.

Running the test command will currently return the default npm error:

```bash
npm test
```

## Security Notes

For production use, consider adding:

- Environment variables for the MongoDB connection string
- Input validation
- Duplicate email handling
- Consistent HTTP status codes
- Generic authentication error messages
- Rate limiting
- HTTPS
- Secure session or token-based authentication
- Removal of password-related data from API responses
- Removal of password hashes from console logs
- Production-grade error handling

## License

This project currently declares an ISC license in `package.json`.
