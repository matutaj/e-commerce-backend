import { Router } from "express";

import { CreateBuyController } from "../models/buy/useCase/create/CreateBuyController";
import { GetAllBuyController } from "../models/buy/useCase/getAll/GetAllBuyController";
import { GetBuyUserIdController } from "../models/buy/useCase/getByUserId/GetBuyUserIdController";

const createBuy = new CreateBuyController()
const getAll = new GetAllBuyController()
const getBuyUserId = new GetBuyUserIdController()


const buyRoutes = Router()

buyRoutes.post("/", createBuy.handle)
buyRoutes.get("", getAll.handle)
buyRoutes.get("/:userId", getBuyUserId.handle)
export { buyRoutes }