import { User } from "../user/user.model";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import envVariables from "../../config/env.config";

const loginWithCredentials = async (payload: {
  email: string;
  password: string;
}) => {
  const user = await User.findOne({ email: payload.email, isDeleted: false });

  if (!user) throw new Error("User does not exist");

  if (!payload.email || !payload.password)
    throw new Error("Email and password are required");

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password
  );

  if (!isPasswordMatched) throw new Error("Password is incorrect");

  const jwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, envVariables.JWT_ACCESS_SECRET, {
    expiresIn: envVariables.JWT_ACCESS_EXPIRES_IN,
  } as SignOptions);

  return { accessToken };
};


export const AuthService = {
  loginWithCredentials,
};
