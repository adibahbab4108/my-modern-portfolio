import envVariables from "../../config/env.config";
import { AuthProvider, IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";

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
const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const UserService = {
  createUser,
  getUsers,
};
