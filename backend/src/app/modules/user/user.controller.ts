import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from "./user.service";

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
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.getUsers();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
  getUsers
};
