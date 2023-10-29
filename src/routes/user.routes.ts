import { Router } from "express";

import { CreateUserController } from "../models/user/useCase/create/CreateUserController";
import { GetUserAllController } from "../models/user/useCase/getAllUser/GetUserAllController";


const createUser = new CreateUserController()
const getUserAll = new GetUserAllController()

const userRoutes = Router()

userRoutes.post("/", createUser.handle)
userRoutes.get("/", getUserAll.handle)

export { userRoutes }
