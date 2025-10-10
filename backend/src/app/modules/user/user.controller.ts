import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.createUser(req.body);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
