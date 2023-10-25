import { Request, Response } from "express";
import { GetTypeContactByIdUseCase } from "./getTypeContactByIdUseCase";
import { TypeContactByIdSchema } from "../../../../schemas/typeContact";
import { AppError } from "../../../../errors/AppError";

class GetTypeContactByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getTypeContactByIdUseCase = new GetTypeContactByIdUseCase();

    if (!(await TypeContactByIdSchema.isValid({ id })))
      throw new AppError(
        "Field Validation Error: Id Field Must be a UUID string And It is Required.",
        400
      );

    const result = await getTypeContactByIdUseCase.execute(id);

    if (result) return res.status(200).json(result);

    res.status(404).json({ error: "Contact Type Id Does Not Exist." });
  }
}

export { GetTypeContactByIdController };
