/* eslint-disable no-console */

import envVariables from "../config/env.config";
import {
  AuthProvider,
  IAuthProvider,
  IUser,
  Role,
} from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import bcrypt from "bcrypt";

export const seedSuperAdmin = async () => {
  try {
    const isSuperAdminExists = await User.findOne({
      email: envVariables.SUPER_ADMIN_EMAIL,
    });
    if (isSuperAdminExists) {
      console.log("Super Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      envVariables.SUPER_ADMIN_PASSWORD,
      Number(envVariables.BCRYPT_SALT_ROUNDS)
    );
    const authProvider: IAuthProvider = {
      provider: AuthProvider.CREDENTIAL,
      providerId: envVariables.SUPER_ADMIN_EMAIL,
    };

    const payload: IUser = {
      name: envVariables.SUPER_ADMIN_NAME,
      email: envVariables.SUPER_ADMIN_EMAIL,
      password: hashedPassword,
      role: Role.SUPER_ADMIN,
      isVerified: true,
      authProvider: [authProvider],
    };
    const superAdmin = await User.create(payload);

    console.log("SuperAdmin created:\n", superAdmin);
  } catch (error) {
    console.error("Error seeding super admin:", error);
  }
};
