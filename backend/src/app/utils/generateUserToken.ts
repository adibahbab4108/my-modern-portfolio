import envVariables from "../config/env.config";
import { IUser } from "../modules/user/user.interface";
import jwt, { SignOptions } from "jsonwebtoken";

export const generateUserToken = (payload: Partial<IUser>) => {
  const jwtPayload = {
    id: payload._id,
    email: payload.email,
    role: payload.role,
  };
  const accessToken = jwt.sign(jwtPayload, envVariables.JWT_ACCESS_SECRET, {
    expiresIn: envVariables.JWT_ACCESS_EXPIRES_IN,
  } as SignOptions);

  const refreshToken = jwt.sign(jwtPayload, envVariables.JWT_REFRESH_SECRET, {
    expiresIn: envVariables.JWT_REFRESH_EXPIRES_IN,
  } as SignOptions);

  return {
    accessToken,
    refreshToken,
  };
};

export const generateAccessToken = (payload: Partial<IUser>) => {
  const jwtPayload = {
    id: payload._id,
    email: payload.email,
    role: payload.role,
  };
  const accessToken = jwt.sign(jwtPayload, envVariables.JWT_ACCESS_SECRET, {
    expiresIn: envVariables.JWT_ACCESS_EXPIRES_IN,
  } as SignOptions);

  return {
    accessToken,
  };
};

export const generateRefreshToken = (payload: Partial<IUser>) => {
  const jwtPayload = {
    id: payload._id,
    email: payload.email,
    role: payload.role,
  };
  const refreshToken = jwt.sign(jwtPayload, envVariables.JWT_ACCESS_SECRET, {
    expiresIn: envVariables.JWT_ACCESS_EXPIRES_IN,
  } as SignOptions);

  return {
    refreshToken,
  };
};
