import { Request, Response } from "express";
import { GetAllProdutUseCase } from "./GetAllProdutUseCase";


class GetAllProdutController {
    async handle(req: Request, res: Response) {
        const getProdutUseCase = new GetAllProdutUseCase()

        const result = await getProdutUseCase.execute()

        return res.status(200).json(result)
    }
}
export { GetAllProdutController }