import { Router } from "express";
import validateRequest from "../../middleware/ValidateRequest";
import { createUserZodSchema } from "./user.validatation";
import { UserController } from "./user.controller";

const userRouter = Router();

userRouter.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserController.createUser
);
userRouter.post(
  "/",
  UserController.getUsers
);


export default userRouter;
