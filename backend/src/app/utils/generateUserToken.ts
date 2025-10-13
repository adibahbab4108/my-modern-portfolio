import envVariables from "../config/env.config";
import { IUser } from "../modules/user/user.interface";
import jwt, { SignOptions } from "jsonwebtoken";

export const generateUserToken = (payload: Partial<IUser>) => {
  const accessToken = jwt.sign(payload, envVariables.JWT_ACCESS_SECRET, {
    expiresIn: envVariables.JWT_ACCESS_EXPIRES_IN,
  } as SignOptions);

  const refreshToken = jwt.sign(payload, envVariables.JWT_REFRESH_SECRET, {
    expiresIn: envVariables.JWT_REFRESH_EXPIRES_IN,
  } as SignOptions);

  return {
    accessToken,
    refreshToken,
  };
};
