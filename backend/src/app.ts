import express, { Request, Response } from "express";
import userRouter from "./app/modules/user/user.route";
import cors from "cors";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./app/middleware/GlobalErrorHandler";
import { sendResponse } from "./app/utils/sendResponse";
import authRouter from "./app/modules/auth/auth.route";
const app = express();


app.use(express.json());
app.use(cors());
app.use(cookieParser())

// Application routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Global Error Handler
app.use(globalErrorHandler);

// Handle undefined routes
app.use("/*path", (req: Request, res: Response) => {

  sendResponse(res, {
    statusCode: 404,
    success: false,
    message: "Route not found",
    data: null,
  });
});

export default app;

 