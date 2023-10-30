import { Router } from "express";

import { CreateCategoryController } from "../models/category/useCase/create/CreateCategoryController";
import { GetAllCategoryController } from "../models/category/useCase/getAll/GetAllCategoryController";

const createCategory = new CreateCategoryController()
const getAllCategory = new GetAllCategoryController()

const categoryRoutes = Router();


categoryRoutes.post("/", createCategory.handle)
categoryRoutes.get("/", getAllCategory.handle)

export { categoryRoutes }