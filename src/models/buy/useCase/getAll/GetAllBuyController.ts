import { Request, Response } from "express";
import { GetAllBuyUseCase } from "./GetAllBuyUseCase";


class GetAllBuyController {
    async handle(req: Request, res: Response) {
        const getBuyUseCase = new GetAllBuyUseCase()

        const result = await getBuyUseCase.execute()

        return res.status(200).json(result)
    }
}
export { GetAllBuyController }