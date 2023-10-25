import { ContactType } from "@prisma/client";
import { ContactTypeRepository } from "../createTypeContact";

class GetAllTypeContactUseCase {
  async execute(): Promise<ContactType[]> {
    const createTypeRepository = new ContactTypeRepository();

    const contactTypes = await createTypeRepository.get();

    return contactTypes;
  }
}

export { GetAllTypeContactUseCase };
