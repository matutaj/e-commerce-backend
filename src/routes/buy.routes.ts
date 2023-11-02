import { Router } from "express";

import { CreateBuyController } from "../models/buy/useCase/create/CreateBuyController";
import { GetAllBuyController } from "../models/buy/useCase/getAll/GetAllBuyController";

const createBuy = new CreateBuyController()
const getAll = new GetAllBuyController()

const buyRoutes = Router()

buyRoutes.post("/", createBuy.handle)
buyRoutes.get("", getAll.handle)

export { buyRoutes }