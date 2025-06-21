import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import BookRoutes from "./app/modules/book/book.route";
const app: Application = express();

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin || "*");
    },
    // credentials: true // Allow credentials for cookies, authorization headers, etc.
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the Book Borrowing API",
  });
});

app.use("/api/books", BookRoutes);
app.use("/api/borrow", BorrowRoutes);

// Handle 404 errors for undefined routes

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
  next();
});
// Global error handler

app.use(globalErrorHandler);

export default app;
