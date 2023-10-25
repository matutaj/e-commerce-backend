import { Request, Response } from "express";
import { createTypeContactSchema } from "../../../../schemas/typeContact";
import { AppError } from "../../../../errors/AppError";
import { CreateTypeContactUseCase } from "./createTypeContactUseCase";

class CreateTypeContactController {
  async handle(req: Request, res: Response) {
    const { description } = req.body;

    if (!(await createTypeContactSchema.isValid(req.body)))
      throw new AppError("Fields Validation Error!", 400);

    const createTypeContactUseCase = new CreateTypeContactUseCase();

    const result = await createTypeContactUseCase.execute(description);

    return res.status(201).json(result);
  }
}

export { CreateTypeContactController };
