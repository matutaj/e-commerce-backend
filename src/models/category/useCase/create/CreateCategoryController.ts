import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


class CreateCategoryController {
    handle(req: Request, res: Response) {
        const categoryUseCase = new CreateCategoryUseCase()


    }
}

export { CreateCategoryController }