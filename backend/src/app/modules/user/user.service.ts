import envVariables from "../../config/env.config";
import { AuthProvider, IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    throw new Error("User already exists with this email");
  }

  let hashedPassword;
  if (password)
    hashedPassword = await bcrypt.hash(
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
    auths: [authProvider],
    ...rest,
  });

  if (!user) {
    throw new Error("User creation failed");
  }

  return user;
};

export const UserService = {
  createUser,
};
