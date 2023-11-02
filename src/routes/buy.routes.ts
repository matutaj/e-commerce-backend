import { Router } from "express";

import { CreateBuyController } from "../models/buy/useCase/create/CreateBuyController";

const createBuy = new CreateBuyController()

const buyRoutes = Router()

buyRoutes.post("/", createBuy.handle)

export { buyRoutes }