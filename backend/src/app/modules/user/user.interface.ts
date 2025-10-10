import { Types } from "mongoose";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
export enum AuthProvider {
  CREDENTIAL = "CREDENTIAL",
  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
}
export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BANNED = "BANNED",
}
export interface IUser {
  _id: Types.ObjectId;
  email: string;
  password: string;
  name?: string;
  role: Role;
  pictureUrl?: string;
  address?: string;
  phoneNumber?: string;
  isActive: boolean;
  isDeleted: boolean;
  isVerified: boolean;

  authProvider: AuthProvider;
  status: UserStatus;
  blogs: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
