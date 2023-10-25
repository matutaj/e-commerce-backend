import { ContactType } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ContactTypeRepository } from "../../repositories/Implementations/ContactTypeRepository";
import {
  UpdateTypeContact,
  IContactType,
} from "../../../ContactType/repositories/IContactType";

class UpdateTypeContactUseCase {
  async execute({ id, description }: UpdateTypeContact): Promise<ContactType> {
    const contactTypeRepository = new ContactTypeRepository();

    const typeContactExists = await contactTypeRepository.getById(id);
    if (!typeContactExists)
      throw new AppError("Type Contact Was Not Found", 404);

    const result = await contactTypeRepository.update({ id, description });

    return result;
  }
}

export { UpdateTypeContactUseCase };
