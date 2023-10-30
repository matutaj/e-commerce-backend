import { Category } from "@prisma/client"

interface ICategoryData {
    id?: string
    name: string
}

export interface ICategory {
    create({ }: ICategoryData): Promise<Category>
    getById(id: string): Promise<Category | undefined>
    getByName(name: string): Promise<Category | undefined>
    getAll(): Promise<Category[]>
    delete(id: string): Promise<void>
    update({ id, name }: ICategoryData): Promise<Category>
}