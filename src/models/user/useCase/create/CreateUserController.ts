import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { createUserSchema } from "../../../../schemas/user";
import { AppError } from "../../../../errors/AppError";


class CreateUserController {

    async handle(req: Request, res: Response) {
        const userUseCase = new CreateUserUseCase();

        if (!(createUserSchema.isValid(req.body)))
            throw new AppError("Field Validation Error", 400)

        const result = await userUseCase.execute(req.body)

        return res.status(200).json(result);

    }

}
export { CreateUserController }