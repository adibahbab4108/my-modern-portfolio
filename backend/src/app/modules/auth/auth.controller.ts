import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import envVariables from "../../config/env.config";

const credentialsLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const loginInfo = await AuthService.loginWithCredentials(req.body);

    res.cookie("accessToken", loginInfo.accessToken, {
      httpOnly: true,
      secure: envVariables.NODE_ENV === "development",
    });
    res.cookie("refreshToken", loginInfo.refreshToken, {
      httpOnly: true,
      secure: envVariables.NODE_ENV === "development",
    });

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

const getNewAccessToken = async (req: Request, res: Response) => {
  const refreshToken  = req.cookies.refreshToken;

  const tokenInfo = await AuthService.getNewAccessToken(refreshToken);

    res.cookie("accessToken", tokenInfo.accessToken, {
      httpOnly: true,
      secure: envVariables.NODE_ENV === "development",
    });

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Access token generated successfully",
    data: tokenInfo,
  });
};

export const AuthController = {
  credentialsLogin,
  getNewAccessToken,
};
