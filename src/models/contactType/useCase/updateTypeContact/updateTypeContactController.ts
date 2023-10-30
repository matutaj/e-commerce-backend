import { Request, Response } from "express";
import { UpdateTypeContactUseCase } from "./updateTypeContactUseCase";
import { updateTypeContactSchema } from "../../../../schemas/typeContact";
import { AppError } from "../../../../errors/AppError";

class UpdateTypeContactController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { description } = req.body;

    const updateTypeContactUseCase = new UpdateTypeContactUseCase();

    if (!updateTypeContactSchema.isValid(req.body))
      throw new AppError("Fields Validation Error!", 400);

    const result = await updateTypeContactUseCase.execute({ id, description });

    res.status(202).json(result);
  }
}

export { UpdateTypeContactController };
