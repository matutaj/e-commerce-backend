import { Router } from "express";

import { CreateCategoryController } from "../models/category/useCase/create/CreateCategoryController";

const createCategory = new CreateCategoryController()

const categoryRoutes = Router();

categoryRoutes.post("/", createCategory.handle)

export { categoryRoutes }