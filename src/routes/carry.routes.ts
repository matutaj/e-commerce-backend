import { Router } from "express";

import { CreateCarryController } from "../models/carry/useCase/create/CreateCarryController";

const createCarry = new CreateCarryController()


const carryRoutes = Router()
carryRoutes.post("/", createCarry.handle)

export { carryRoutes }