import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import envVariables from "../../config/env.config";
import { generateUserToken } from "../../utils/generateUserToken";
import { setAuthCookie } from "../../utils/setCookie";
import { IUser } from "../user/user.interface";

const credentialsLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const loginInfo = await AuthService.loginWithCredentials(req.body);

    setAuthCookie(res, loginInfo);

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

const logout = async (req: Request, res: Response) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: envVariables.NODE_ENV === "production",
    sameSite: "lax",
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: envVariables.NODE_ENV === "production",
    sameSite: "lax",
  });

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Logout successfull",
    data: null,
  });
};

const getNewAccessToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    const tokenInfo = await AuthService.getNewAccessToken(refreshToken);

    setAuthCookie(res, tokenInfo);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Access token generated successfully",
      data: tokenInfo,
    });
  } catch (error) {
    next(error);
  }
};

const googleCallbackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user as IUser;
    if (!user) {
      throw new Error("User not found");
    }

    const tokenInfo = generateUserToken(user);
    setAuthCookie(res, tokenInfo);

    res.redirect(envVariables.FRONTEND_URL);
  } catch (error) {
    next(error);
  }
};

export const AuthController = {
  credentialsLogin,
  logout,
  getNewAccessToken,
  googleCallbackController,
};
