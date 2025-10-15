import { Types } from "mongoose";

export enum Role {
  SUPER_ADMIN="SUPER_ADMIN",
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
  BLOCKED = "BLOCKED",


}
export interface IAuthProvider {
  provider: AuthProvider;
  providerId: string;
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
