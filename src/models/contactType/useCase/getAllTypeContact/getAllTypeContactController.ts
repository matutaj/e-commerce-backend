import { Request, Response } from "express";
import { GetAllTypeContactUseCase } from "./getAllTypeContactUseCase";

class GetAllTypeContactController {
  async handle(req: Request, res: Response) {
    const getAllTypeContactUseCase = new GetAllTypeContactUseCase();

    const result = await getAllTypeContactUseCase.execute();

    res.status(200).json(result);
  }
}

export { GetAllTypeContactController };
