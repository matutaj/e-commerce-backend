import { Request, Response } from "express";
import { CreateCarryUseCase } from "./CreateCarryUseCase";
import { createCarrySchema } from "../../../../schemas/carry";
import { AppError } from "../../../../errors/AppError";


class CreateCarryController {
    async handle(req: Request, res: Response) {
        const carryUseCase = new CreateCarryUseCase()

        if (!createCarrySchema.isValid(req.body))

            throw new AppError("Fields Validation Error", 400)

        const result = await carryUseCase.execute(req.body)

        res.status(200).json(result)
    }
}
export { CreateCarryController }