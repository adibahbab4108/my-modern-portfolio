import { Types } from "mongoose";
import { IAuthProvider } from "../auth/auth.interface";

export enum Role {
  SUPER_ADMIN="SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",


}

export interface IUser {
  _id?: Types.ObjectId;
  email: string;
  password?: string;
  name?: string;
  role: Role;
  pictureUrl?: string;
  address?: string;
  phoneNumber?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  isVerified?: boolean;

  authProvider: IAuthProvider[];
  status?: UserStatus;
  blogs?: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}
