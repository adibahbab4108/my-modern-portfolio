import { NextFunction, Request, Response } from "express";
import { User } from "../modules/user/user.model";
import { UserStatus } from "../modules/user/user.interface";
import { verifyToken } from "../utils/jwt";
import envVariables from "../config/env.config";
import { JwtPayload } from "jsonwebtoken";


export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {

      const accessToken = req.headers.authorization || req.cookies.accessToken;

      if (!accessToken) {
        throw new Error("No token received");
      }

      const decodedToken = verifyToken(accessToken, envVariables.JWT_ACCESS_SECRET);

      if (!decodedToken) {
        throw new Error("Invalid token");
      }

      const isUserExist = await User.findOne({
        email: decodedToken.email,
      });

      if (!isUserExist) {
        throw new Error("User does not exist");
      }
      if (
        isUserExist.status === UserStatus.BLOCKED ||
        isUserExist.status === UserStatus.INACTIVE
      ) {
        throw new Error(`User is ${isUserExist.status}`);
      }
 
      if (isUserExist.isDeleted) {
        throw new Error("User is deleted");
      }

      //authRoles = ["ADMIN", "SUPER_ADMIN"].includes("ADMIN")
      if (!authRoles.includes((decodedToken as JwtPayload).role)) {
        throw new Error("You are not authorized to access this route");
      }

      req.user = decodedToken; // added user(customized property) info to req object for further usage.
      next();
    } catch (error) {
      next(error);
    }
  };
