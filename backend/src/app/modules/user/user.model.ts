import { model, Schema } from "mongoose";
import { AuthProvider, IUser, Role, UserStatus } from "./user.interface";

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String  },
    role: { type: String, enum: Object.values(Role), default: Role.USER },
    pictureUrl: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    authProvider: {
      type: String,
      enum: Object.values(AuthProvider),
    },
    status: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
    },
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  },
  { timestamps: true }
);
export const User = model<IUser>("User", UserSchema);
