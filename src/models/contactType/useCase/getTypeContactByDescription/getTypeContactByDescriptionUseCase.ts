import { ContactType } from "@prisma/client";
import { ContactTypeRepository } from "../createTypeContact";

class GetTypeContactByDescriptionUseCase {
  async execute(description: string): Promise<ContactType | undefined> {
    const createTypeRepository = new ContactTypeRepository();

    const contactType = await createTypeRepository.getByDescription(
      description
    );

    return contactType;
  }
}

export { GetTypeContactByDescriptionUseCase };
