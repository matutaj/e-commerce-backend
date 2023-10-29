import { Contact } from "@prisma/client";
import { CreateContactType, IContact, } from "../IContact";
import { prisma } from "../../../../prisma";

class ContactRepository implements IContact {
  async create({
    content,
    contactTypeId,
    userId,
  }: CreateContactType): Promise<Contact> {
    const contact = await prisma.contact.create({
      data: { content, contactTypeId, userId },
    });

    return contact;
  }

  async getById(id: string): Promise<Contact | undefined> {
    const contact =
      (await prisma.contact.findUnique({ where: { id } })) || undefined;
    return contact;
  }

  async getByContent(content: string): Promise<Contact | undefined> {
    const contact =
      await prisma.contact.findUnique({ where: { content } }) || undefined;
    return contact;
  }

  async getUserId(userId: string): Promise<Contact[] | undefined> {
    const contact =
      await prisma.contact.findMany({ where: { userId } }) || undefined;
    return contact;
  }


  async update({
    id,
    content,
    contactTypeId,
    userId,
  }: CreateContactType): Promise<Contact> {
    const updateContact = await prisma.contact.update({
      where: { id },
      data: {
        content,
        contactTypeId,
        userId,
      },
    });

    return updateContact;
  }

  async delete(id: string): Promise<void> {
    await prisma.contact.delete({ where: { id } });
    return;
  }
}

export { ContactRepository };
