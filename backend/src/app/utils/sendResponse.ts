 import { Response } from "express";

interface TMeta {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
}

export const sendResponse = <T>(
  res: Response,
  response: {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
    meta?: TMeta;
  }
) => {
  const { statusCode, success, message, data, meta } = response;

  return res.status(statusCode).json({
    success,
    message,
    data,
    meta,
  });
};
