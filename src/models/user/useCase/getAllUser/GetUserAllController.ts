import { Request, Response } from "express";
import { GetUserAllUseCase } from "./GetUserAllUseCase";


class GetUserAllController {
    async handle(req: Request, res: Response) {
        const userUseCase = new GetUserAllUseCase();

        const result = await userUseCase.execute()

        return res.status(200).json(result)
    }
}
export { GetUserAllController }