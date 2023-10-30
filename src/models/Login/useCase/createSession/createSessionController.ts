import { Request, Response } from "express";
import { sessionSchema } from "../../../../schemas/login";
import { CreateSessionUseCase } from "./createSessionUseCase";
import { AppError } from "../../../../errors/AppError";

class CreateSessionController {
  async handle(req: Request, res: Response) {
    const createSessionUseCase = new CreateSessionUseCase();
    const { email, password } = req.body;

    if (!(await sessionSchema.isValid(req.body)))
      throw new AppError("Fields Validation Error!", 400);

    const result = await createSessionUseCase.execute({ email, password });
    res.status(200).json(result);
  }
}

export { CreateSessionController };
