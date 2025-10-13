import { Router } from "express";
import validateRequest from "../../middleware/ValidateRequest";
import { createUserZodSchema } from "./user.validatation";
import { UserController } from "./user.controller";
import { checkAuth } from "../../middleware/CheckAuth";
import { Role } from "./user.interface";

const userRouter = Router();

userRouter.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserController.createUser
);
userRouter.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.USER),
  UserController.getUsers
);

export default userRouter;
