/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import envVariables from "../config/env.config";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    message: "From global handler:Internal Server Error",
    error: err.message,
    stack: envVariables.NODE_ENV === "development" ? err.stack : null,
  });
};
