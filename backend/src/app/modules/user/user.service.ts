import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;
  const user = await User.create({ email, password, ...rest });
  return user;
};

export const UserService = {
  createUser,
};
