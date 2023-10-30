import { Request, Response } from "express";
import { GetAllCategoryUseCase } from "./GetAllCategoryUseCase";


class GetAllCategoryController {
    async handle(req: Request, res: Response) {
        const getCategoryUseCase = new GetAllCategoryUseCase()

        const result = await getCategoryUseCase.execute()

        return res.status(200).json(result)
    }
}
export { GetAllCategoryController }