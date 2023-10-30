import { Request, Response } from "express";
import { CreateProdutUseCase } from "./CreateProdutUseCase";
import { createProdutSchema } from "../../../../schemas/produt";
import { AppError } from "../../../../errors/AppError";


class CreateProdutController {
    async handle(req: Request, res: Response) {
        const produtUseCase = new CreateProdutUseCase()

        if (!(await createProdutSchema.isValid(req.body)))
            throw new AppError("Fields Validation Error", 400)

        const result = await produtUseCase.execute(req.body)

        return res.status(200).json(result)
    }
}

export { CreateProdutController }