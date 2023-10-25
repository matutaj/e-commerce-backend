import { ContactType } from "@prisma/client";

export interface UpdateTypeContact {
  id?: string;
  description: string;
}

export interface IContactType {
  create({ }: UpdateTypeContact): Promise<ContactType>;
  getById(id: string): Promise<ContactType | undefined>;
  getByDescription(description: string): Promise<ContactType | undefined>;
  get(): Promise<ContactType[]>;
  update({ }: UpdateTypeContact): Promise<ContactType>;
  delete(id: string): Promise<void>;
}
