import { ContactType } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ContactTypeRepository } from "../../repositories/Implementations/ContactTypeRepository";

class CreateTypeContactUseCase {
  async execute(description: string): Promise<ContactType> {
    const typeContactRepository = new ContactTypeRepository();

    const existDescription = await typeContactRepository.getByDescription(
      description
    );

    if (existDescription) {
      throw new AppError("This Type Contact Already exist!", 400);
    }
    const createTypeContact = await typeContactRepository.create({ description });

    return createTypeContact;
  }
}
export { CreateTypeContactUseCase };
