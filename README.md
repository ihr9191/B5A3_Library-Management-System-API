﻿# Library Management System API

A scalable, type-safe RESTful API for managing a library's book inventory and borrowing operations. Built with Express, TypeScript, and MongoDB (via Mongoose), this project ensures robust data handling and seamless user interactions.

**🚀 Features**

- 📖 Full CRUD functionality for book management
- 🔄 Borrowing system with real-time availability tracking
- 📈 Aggregated borrowing statistics
- ✅ Zod-based input validation
- 🛠️ Mongoose middleware, static, and instance methods
- 🚨 Centralized error management
- 🧩 Modular, maintainable code structure

# 📁 Project Structure

```bash
src/
├── app/
│   ├── routes/                 # Home routes
│   │   └── index.ts
│   ├── modules/
│   │   ├── book/
│   │   │   ├── book.controller.ts
│   │   │   ├── book.model.ts
│   │   │   ├── book.route.ts
│   │   │   ├── book.service.ts
│   │   │   └── book.interface.ts
│   │   └── borrow/
│   │       ├── borrow.controller.ts
│   │       ├── borrow.model.ts
│   │       ├── borrow.route.ts
│   │       ├── borrow.service.ts
│   │       └── borrow.interface.ts
│   ├── middlewares/
│   │   └── errorHandler.ts
│   ├── utils/
│   │   ├── sendResponse.ts
│   │   └── sendResponse.interface.ts
│   └── config/
│       └── db.ts               # MongoDB connection
├── app.ts                      # Express app configuration
├── server.ts                   # Application entry point
└── .env                        # Environment variables
├── .gitignore
├── eslint.config.mjs         # ESLint Flat Config (using @eslint/js +typescript-eslint)
├── package.json
├── package-lock.json
├── readme.md
├── tsconfig.json

```

**🧪 Technologies Used**

- Node.js, Express
- TypeScript
- MongoDB + Mongoose
- Zod for input validation
- ESLint, Prettier for code quality

# 📌 API Endpoints

**🔰 Base URL**

```bash
<http://localhost:5000/api>

```

**🌐 Home Route**`GET /`

Returns a welcome message and available API routes.

**📚 Book Routes**`POST /api/books`
Create a new book.

```json
{
  "title": "A Brief History of Time",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "Explores the universe's mysteries.",
  "copies": 3
}
```

`GET /api/books`
Get all books. Supports filtering and sorting.

- *- **
- filter: Genre filter (FICTION, SCIENCE, etc.)
- sortBy: Sort key (e.g., createdAt)
- sort: asc or desc
- limit: Number of results

`GET /api/books/:bookId`
Get a book by ID.

`PUT /api/books/:bookId`
Update book details. Accepts partial fields.

```json
{
  "copies": 10
}

```

`DELETE /api/books/:bookId`
Deletes a book.

**🔄 Borrow Routes**`POST /api/borrow`
Borrow a book.

```json
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}

```

# Business Logic:

- Copies must be available.
- Book availability is automatically updated.
- Mongoose instance method ensures available = false if copies drop to 0.

`GET /api/borrow`
Returns an aggregated summary:

```json
[
  {
    "book": {
      "title": "A Brief History of Time",
      "isbn": "9780553380163"
    },
    "totalQuantity": 4
  }
]
```

## 🧪 Validation Rules (Zod)

**Book:**

- title, author, isbn, genre, and copies are required.
- genre must be one of the allowed enums.

**Borrow:**

- book, quantity, and dueDate are required.
- quantity must be positive.

# 🧠 Core Features & Concepts

- **Zod Validation**: Ensures strict request payload validation.
- **Service Layer**: Separates business logic for better maintainability.
- **Mongoose Instance Method**: book.checkStock() updates availability status.
- **Aggregation Pipeline**: Summarizes borrowing data in /api/borrow.
- **Error Middleware**: Standardizes error responses across the API.

# 🛠️ Setup Instructions

```bash

# Clone the repo

git clone <https://github.com/yourname/library-management-api.git>

# Install dependencies

cd library-management-api
npm install

# Create a .env file and add your MongoDB URI

echo "MONGODB_URI=mongodb://localhost:27017/library" > .env

# Start the server

npm run dev

```

# 🔍 Key Implementation Details

- **Modular Design**: Codebase is organized into modules for scalability.
- **Type Safety**: TypeScript ensures robust type checking.
- **Mongoose Middleware**: Automatically updates updatedAt and availability.
- **Aggregation**: Uses MongoDB’s pipeline for efficient borrow summaries.
- **Error Handling**: Centralized middleware for consistent error responses.

# 🌐 Deployment

Live API: 

Video Explanation: 

# 📝 Notes

- Ensure MongoDB is running locally or provide a cloud URI in .env.
- The API is optimized for performance and scalability.
- All endpoints adhere strictly to the provided specifications.
