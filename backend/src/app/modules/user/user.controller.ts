import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
   
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const UserController = {
  createUser,
};
