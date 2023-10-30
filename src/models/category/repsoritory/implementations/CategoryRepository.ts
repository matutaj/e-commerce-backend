import { Category } from "@prisma/client";
import { ICategory, ICategoryData } from "../ICategory";
import { prisma } from "../../../../prisma";


class CategoryRepository implements ICategory {
    async create({ name }: ICategoryData): Promise<Category> {
        const create = await prisma.category.create({ data: { name } })

        return create
    }
    async getAll(): Promise<Category[]> {
        const getAllCategory = await prisma.category.findMany()

        return getAllCategory;
    }
    async getById(id: string): Promise<Category | undefined> {
        const getByIdCategory = await prisma.category.findFirst({ where: { id } }) || undefined

        return getByIdCategory;
    }

    async getByName(name: string): Promise<Category | undefined> {
        const getByNameCategory = await prisma.category.findFirst({ where: { name } }) || undefined

        return getByNameCategory;
    }
    async delete(id: string): Promise<void> {
        await prisma.category.delete({ where: { id } })
    }

    async update({ id, name }: ICategoryData): Promise<Category> {
        const update = await prisma.category.update({ where: { id }, data: { name } })

        return update

    }
}
export { CategoryRepository }