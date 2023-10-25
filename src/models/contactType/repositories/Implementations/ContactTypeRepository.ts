import { prisma } from "../../../../prisma";
import { IContactType, UpdateTypeContact } from "../IContactType";
import { ContactType } from "@prisma/client";


class ContactTypeRepository implements IContactType {
    async create({ description }: UpdateTypeContact): Promise<ContactType> {
        const createTypeContact = await prisma.contactType.create({
            data: { description },
        });
        return createTypeContact;
    }

    async getById(id: string): Promise<ContactType | undefined> {
        const typeContact =
            (await prisma.contactType.findUnique({ where: { id } })) || undefined;

        return typeContact;
    }

    async getByDescription(
        description: string
    ): Promise<ContactType | undefined> {
        const typeContact =
            (await prisma.contactType.findUnique({ where: { description } })) ||
            undefined;

        return typeContact;
    }

    async get(): Promise<ContactType[]> {
        const typesContact = await prisma.contactType.findMany({});

        return typesContact;
    }

    async update({ id, description }: UpdateTypeContact): Promise<ContactType> {
        const updateTypeContact = await prisma.contactType.update({
            where: { id },
            data: { description },
        });

        return updateTypeContact;
    }

    async delete(id: string): Promise<void> {
        await prisma.contactType.delete({
            where: { id },
        });

        return;
    }
}
export { ContactTypeRepository };
