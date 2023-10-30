import { Decimal } from "@prisma/client/runtime/library";
import { IProdut, IProdutData } from "../IProdut";
import { prisma } from "../../../../prisma";
import { Produt } from "@prisma/client";


class ProdutRepository implements IProdut {
    async create({ categoryId, cost, name, quant, imageUrl }: IProdutData): Promise<Produt> {
        const create = await prisma.produt.create({
            data: {
                categoryId, cost, name, quant, imageUrl
            }
        })
        return create
    }

    async getById(id: string): Promise<Produt | undefined> {
        const getById = await prisma.produt.findUnique({ where: { id }, include: { Carry: true } }) || undefined

        return getById
    }

    async getByName(name: string): Promise<Produt | undefined> {
        const getByName = await prisma.produt.findFirst({ where: { name }, include: { Carry: true } }) || undefined;

        return getByName;
    }

    async getAll(): Promise<Produt[]> {
        const getAll = await prisma.produt.findMany({ include: { Carry: true } })
        return getAll;
    }

    async getProdutByCategoryId(id: string): Promise<Produt | undefined> {

        const getProdutToCategoryId = await prisma.produt.findFirst({ where: { categoryId: id }, include: { Carry: true } }) || undefined
        return getProdutToCategoryId
    }

    async delete(id: string): Promise<void> {
        await prisma.produt.delete({ where: { id } })
    }

    async update({ categoryId, cost, name, quant, id, imageUrl }: IProdutData): Promise<Produt> {
        const update = await prisma.produt.update({ where: { id }, data: { name, imageUrl, categoryId, cost, quant } })

        return update

    }
}