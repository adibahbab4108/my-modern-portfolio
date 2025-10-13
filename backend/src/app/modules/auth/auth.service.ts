import { User } from "../user/user.model";
import bcrypt from "bcrypt";
import { generateUserToken } from "../../utils/generateUserToken";
import { verifyToken } from "../../utils/jwt";
import envVariables from "../../config/env.config";
import { UserStatus } from "../user/user.interface";

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

  const userToken = generateUserToken(jwtPayload);

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

  const payloadForToken = {
    userId: isUserExist._id,
    email: isUserExist.email,
    role: isUserExist.role,
  };

  const userToken = generateUserToken(payloadForToken);

  return { accessToken: userToken.accessToken };
};

export const AuthService = {
  loginWithCredentials,
  getNewAccessToken,
};
