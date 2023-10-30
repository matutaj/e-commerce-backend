import { Request, Response } from "express";
import { GetByNameProdutUseCase } from "./GetByNameProdutUseCase";
import { getByNameSchema } from "../../../../schemas/produt";
import { AppError } from "../../../../errors/AppError";


class GetByNameProdutController {
    async handle(req: Request, res: Response) {
        const getProdutUseCase = new GetByNameProdutUseCase()
        const { nameProdut } = req.params
        if (!(getByNameSchema.isValid(nameProdut)))
            throw new AppError("field Validation Error", 400);

        const result = await getProdutUseCase.execute(nameProdut)

        return res.status(200).json(result)
    }
}
export { GetByNameProdutController }