import { ContactType } from "@prisma/client";
import { ContactTypeRepository } from "../createTypeContact";

class GetTypeContactByIdUseCase {
  async execute(id: string): Promise<ContactType | undefined> {
    const createTypeRepository = new ContactTypeRepository();

    const contactType = await createTypeRepository.getById(id);

    return contactType;
  }
}

export { GetTypeContactByIdUseCase };
