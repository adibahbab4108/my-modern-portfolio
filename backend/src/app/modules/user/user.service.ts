import { IUser } from "./user.interface";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;
  console.log(email, password, rest);
};

export const UserService = {
  createUser,
};
