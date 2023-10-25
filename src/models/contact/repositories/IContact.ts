import { Contact } from "@prisma/client";

export interface CreateContactType {
  content: string;
  contactTypeId: string;
  userId: string;
  id?: string;
}


export interface IContact {
  create({ }: CreateContactType): Promise<Contact>;
  getById(id: string): Promise<Contact | undefined>;
  getByContent(content: string): Promise<Contact | undefined>;
  getUserId(userId: string): Promise<Contact[] | undefined>;
  update({ }: CreateContactType): Promise<Contact>;
  delete(id: string): Promise<void>;
}
