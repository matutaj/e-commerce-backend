import { Request, Response } from "express";
import { AppError } from "../../../../src/errors/AppError";
import { loginSchema } from "../../../../src/schemas/login";
import { CreateLoginUseCase } from "./createLoginUseCase";

class CreateLoginController {
  async handle(req: Request, res: Response) {
    const { email, password, userId } = req.body;
    const createLoginUseCase = new CreateLoginUseCase();

    if (!(await loginSchema.isValid(req.body)))
      throw new AppError("Fields Validation Error!", 400);

    await createLoginUseCase.execute({
      email,
      passwordHash: password,
      userId,
    });

    return res.status(201).send();
  }
}

export { CreateLoginController };
