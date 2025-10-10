import z from "zod";
import { Role } from "./user.interface";

export const createUserZodSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be between 3 and 50 characters" })
    .optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must not exceed 20 characters" })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, {
      message:
        "Password must contain letters, numbers, and a special character (@$!%*?&)",
    })
    .optional(),
  email: z.email("Invalid email address"),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  pictureUrl: z.url("Invalid URL").optional(),
  role: z.enum([...Object.values(Role)]).optional(),
  isActive: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
});
