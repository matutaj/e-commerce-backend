import { ContactTypeRepository } from "../createTypeContact";
import { AppError } from "../../../../errors/AppError";

class DeleteTypeContactUseCase {
  async execute(id: string): Promise<void> {
    const contactTypeRepository = new ContactTypeRepository();

    const typeContactExists = await contactTypeRepository.getById(id);
    if (!typeContactExists)
      throw new AppError("Type Contact Was Not Found", 404);

    await contactTypeRepository.delete(id);
    return;
  }
}

export { DeleteTypeContactUseCase };
