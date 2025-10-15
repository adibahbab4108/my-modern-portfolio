import {  Router } from "express";
import { AuthController } from "./auth.controller";
import passport from "passport";

const authRouter = Router();

authRouter.post("/login", AuthController.credentialsLogin);

// Step 1: Redirect to Google for consent
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// Step 2: Callback after consent
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  AuthController.googleCallbackController
);
authRouter.post("/logout", AuthController.logout);
authRouter.post("/refresh-token", AuthController.getNewAccessToken);

export default authRouter;
