import { $Enums, User } from "@prisma/client";
import { DataUser, IUser } from "../IUser";
import { prisma } from "../../../../prisma";


class UserRepository implements IUser {
    async create({ name, imageUrl, typeUser, }: DataUser): Promise<User> {
        const createUser = await prisma.user.create({
            data: {
                imageUrl, name, typeUser
            }
        })
        return createUser
    }
    async getAll(): Promise<User[]> {
        const getAllUser = await prisma.user.findMany({ include: { Contact: true, Buy: true } })

        return getAllUser;
    }

    async getById(id: string): Promise<User | undefined> {
        const getUserById = await prisma.user.findFirst({ where: { id }, include: { Contact: true, Buy: true } }) || undefined;

        return getUserById;
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({ where: { id } })
    }


    async update({ imageUrl, name, typeUser, id }: DataUser): Promise<User> {
        const update = await prisma.user.update({ where: { id }, data: { name, typeUser, imageUrl } })
        return update
    }
}
export { UserRepository }