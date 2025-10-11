import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middleware/ValidateRequest";
import { createUserZodSchema } from "./user.validatation";

const userRouter = Router();

userRouter.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserController.createUser
);

export default userRouter;
