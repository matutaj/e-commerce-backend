import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { TypeContactByDescriptionSchema } from "../../../../schemas/typeContact";
import { GetTypeContactByDescriptionUseCase } from "./getTypeContactByDescriptionUseCase";

class GetTypeContactByDescriptionController {
  async handle(req: Request, res: Response) {
    const { description } = req.params;
    const getTypeContactByDescriptionUseCase =
      new GetTypeContactByDescriptionUseCase();

    if (!(await TypeContactByDescriptionSchema.isValid({ description })))
      throw new AppError(
        "Field Validation Error: Description Field Must be a string And It is Required.",
        400
      );

    const result = await getTypeContactByDescriptionUseCase.execute(
      description
    );

    if (result) return res.status(200).json(result);

    res.status(404).json({ error: "Contact Type Description Does Not Exist." });
  }
}

export { GetTypeContactByDescriptionController };
