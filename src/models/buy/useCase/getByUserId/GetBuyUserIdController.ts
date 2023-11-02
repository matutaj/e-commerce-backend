import { Request, Response } from "express";
import { GetBuyUserIdUseCase } from "./GetBuyUserIdUseCase";


class GetBuyUserIdController {
    async handle(req: Request, res: Response) {
        const getBuyUseCase = new GetBuyUserIdUseCase()
        const { userId } = req.params

        const result = await getBuyUseCase.execute(userId)

        return res.status(200).json(result)
    }
}
export { GetBuyUserIdController }