import { Router } from "express";

import { CreateUserController } from "../models/user/useCase/create/CreateUserController";

const createUser = new CreateUserController()


const userRoutes = Router()

userRoutes.post("/", createUser.handle)

export { userRoutes }
