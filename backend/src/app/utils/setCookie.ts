import { Response } from "express";
import envVariables from "../config/env.config";
export interface AuthToken {
  accessToken?: string;
  refreshToken?: string;
}

export const setAuthCookie = (res: Response, tokenInfo: AuthToken) => {

  if (tokenInfo.accessToken) {
    res.cookie("accessToken", tokenInfo.accessToken, {
      httpOnly: true,
      secure: envVariables.NODE_ENV === "production",
      // sameSite: "lax", //must for OAuth, otherwise token won't be set
      sameSite:"none"
    });
  }

  if (tokenInfo.refreshToken) {
    res.cookie("refreshToken", tokenInfo.refreshToken, {
      httpOnly: true,
      secure: envVariables.NODE_ENV === "production",
      // sameSite: "lax",
      sameSite:"none"
    });
  }
};
