import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";


const credentialsLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const loginInfo = await AuthService.loginWithCredentials(req.body);

    
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Login successful",
      data: loginInfo,
    });
  } catch (error) {
    next(error);
  }
};
export const AuthController = {
  credentialsLogin,
};
