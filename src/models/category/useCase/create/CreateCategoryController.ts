import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { createCategorySchema } from "../../../../schemas/category";
import { AppError } from "../../../../errors/AppError";


class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const categoryUseCase = new CreateCategoryUseCase()
        const { name } = req.body
        if (!(createCategorySchema.isValid(name)))
            throw new AppError("field Validation Error", 400)

        const result = await categoryUseCase.execute(name)
        return res.status(200).json(result)
    }
}

export { CreateCategoryController }