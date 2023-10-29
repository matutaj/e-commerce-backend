import { TypeUser, User } from "@prisma/client";
import { UserRepository } from "../../repositories/Implementations/UserRepository";
import { ContactTypeRepository } from "../../../contactType/useCase/createTypeContact";
import { ContactRepository } from "../../../contact/repositories/implementations/ContactRepository";
import { AppError } from "../../../../errors/AppError";
import { LoginRepository } from "../../../../Login/repositories/implementations/LoginRepository";


interface UserData {
    name: string
    imageUrl: string
    typeUser: TypeUser
    password: string
}
interface UserContact {
    content: string,
    contactTypeId: string,
}

interface UserDataAll {
    userData: UserData
    userContact: UserContact[]
}
class CreateUserUseCase {
    async execute({
        userData: { name, imageUrl, typeUser, password },
        userContact
    }: UserDataAll): Promise<User> {
        const userReposiroty = new UserRepository()
        const contactTypeRepository = new ContactTypeRepository()
        const contactRepository = new ContactRepository()
        const loginRepositories = new LoginRepository()

        await Promise.all(
            userContact.map(async (item) => {
                const contact = await contactRepository.getByContent(item.content);
                if (contact)
                    throw new AppError(
                        `This Contact ${item.content} Alreday Exists!`,
                        400
                    );
            })
        );

        await Promise.all(
            userContact.map(async (item) => {
                const contactType = await contactTypeRepository.getById(
                    item.contactTypeId
                );
                if (!contactType)
                    throw new AppError(
                        `This Contact Type Id ${item.contactTypeId} Does Not Exists!`,
                        404
                    );
            })
        );

        const result = await userReposiroty.create({ imageUrl, name, typeUser })

        await Promise.all(
            userContact.map(async ({ contactTypeId, content }) => {
                await contactRepository.create({
                    content,
                    contactTypeId,
                    userId: result.id,
                });
            })
        );

        await loginRepositories.create({
            userId: result.name,
            passwordHash: password,
            email: userContact[0].content
        })
        return result
    }
}
export { CreateUserUseCase }