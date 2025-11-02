import { User } from "../user/user.model";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateUserToken,
} from "../../utils/generateUserToken";
import { verifyToken } from "../../utils/jwt";
import envVariables from "../../config/env.config";
import { IUser, UserStatus } from "../user/user.interface";
import { AuthProvider, IAuthProvider } from "./auth.interface";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;
  
  if (!email) throw new Error("Email is required");
  if (!password) throw new Error("password is required");

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    throw new Error("User already exists with this email");
  }

  const hashedPassword = await bcrypt.hash(
    password as string,
    Number(envVariables.BCRYPT_SALT_ROUNDS)
  );

  const authProvider: IAuthProvider = {
    provider: AuthProvider.CREDENTIAL,
    providerId: email as string,
  };

  const user = await User.create({
    email,
    password: hashedPassword,
    authProvider: [authProvider],
    ...rest,
  });

  if (!user) {
    throw new Error("User creation failed");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userData } = user.toObject();

  return userData;
};
const loginWithCredentials = async (payload: {
  email: string;
  password: string;
}) => {
  if (!payload.email || !payload.password) {
    throw new Error("Email and password are required");
  }
  const user = await User.findOne({ email: payload.email, isDeleted: false });

  if (!user) throw new Error("User does not exist");

  if (user.password) {
    const isPasswordMatched = await bcrypt.compare(
      payload.password,
      user.password
    );

    if (!isPasswordMatched) throw new Error("Password is incorrect");
  }

  const userToken = generateUserToken(user);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: pass, ...userData } = user.toObject();

  return {
    accessToken: userToken.accessToken,
    refreshToken: userToken.refreshToken,
    user: userData,
  };
};

const getNewAccessToken = async (refreshToken: string) => {
  if (!refreshToken) throw new Error("No refreshtoken received from cookie");

  const decodedToken = verifyToken(
    refreshToken,
    envVariables.JWT_REFRESH_SECRET
  );
  const isUserExist = await User.findOne({ email: decodedToken.email });

  if (!isUserExist) {
    throw new Error("User does not exist");
  }

  if (
    isUserExist.status === UserStatus.BLOCKED ||
    isUserExist.status === UserStatus.INACTIVE
  ) {
    throw new Error(`User is ${isUserExist.isActive}`);
  }

  if (isUserExist.isDeleted) {
    throw new Error("User is deleted");
  }

  const userToken = generateAccessToken(isUserExist);

  return { accessToken: userToken.accessToken };
};

export const AuthService = {
  createUser,
  loginWithCredentials,
  getNewAccessToken,
};
