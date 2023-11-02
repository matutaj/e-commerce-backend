import { Request, Response } from "express";
import { CreateBuyUseCase } from "./CreateBuyUseCAse";
import { createBuySchema } from "../../../../schemas/buy";
import { AppError } from "../../../../errors/AppError";


class CreateBuyController {
    async handle(req: Request, res: Response) {
        const buyUseCase = new CreateBuyUseCase();

        if (!createBuySchema.isValid(req.body))
            throw new AppError("Fields Validation Error", 400)

        const result = await buyUseCase.execute(req.body)

        return res.status(200).json(result)
    }
}
export { CreateBuyController }