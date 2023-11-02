import { Request, Response } from "express";
import { GetAllCarryForUserUseCase } from "./GetCarryForUserIdUseCase";
import { AppError } from "../../../../errors/AppError";
import { getAllCarryForUserId } from "../../../../schemas/carry";

class GetAllCarryForUserController {
    async handle(req: Request, res: Response) {
        const getAllUser = new GetAllCarryForUserUseCase()

        const { userId } = req.params

        if (!getAllCarryForUserId.isValid(userId)) throw new AppError("Field Validation Error", 400)

        const result = await getAllUser.execute(userId)

        res.status(200).json(result)
    }
}
export { GetAllCarryForUserController }