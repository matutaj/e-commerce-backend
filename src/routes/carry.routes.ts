import { Router } from "express";

import { CreateCarryController } from "../models/carry/useCase/create/CreateCarryController";
import { GetAllCarryForUserController } from "../models/carry/useCase/getAllCarryForUser/GetAllCarryUserIdController";

const createCarry = new CreateCarryController()
const getAll = new GetAllCarryForUserController()

const carryRoutes = Router()
carryRoutes.post("/", createCarry.handle)
carryRoutes.get("/:userId", getAll.handle)

export { carryRoutes }