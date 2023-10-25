import { Request, Response } from "express";
import { DeleteTypeContactUseCase } from "./deleteTypeContactUseCase";
import { TypeContactByIdSchema } from "../../../../schemas/typeContact";
import { AppError } from "../../../../errors/AppError";

class DeleteTypeContactController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteTypeContactUseCase = new DeleteTypeContactUseCase();

    if (!(await TypeContactByIdSchema.isValid({ id })))
      throw new AppError(
        "Field Validation Error: Id Field Must be a UUID string And It is Required.",
        400
      );

    await deleteTypeContactUseCase.execute(id);

    res.status(202).send();
  }
}

export { DeleteTypeContactController };
