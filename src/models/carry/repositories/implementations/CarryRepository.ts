import { Carry, Produt } from "@prisma/client";
import { DataCarry, ICarry } from "../ICarry";
import { prisma } from "../../../../prisma";
import { Decimal } from "@prisma/client/runtime/library";


class CarryRepository implements ICarry {
    async create({ produtId, userId }: DataCarry): Promise<Carry> {
        const createCArry = await prisma.carry.create({ data: { produtId, userId } })

        return createCArry;
    }

    async getAll(): Promise<Carry[]> {
        const getAllCarry = await prisma.carry.findMany({ include: { user: true, produt: true } })

        return getAllCarry;
    }

    async getById(id: string): Promise<Carry | undefined> {
        const getCarryById = await prisma.carry.findFirst({ where: { id }, include: { user: true, produt: true } }) || undefined;

        return getCarryById;
    }
    async getByName(name: string): Promise<Produt | undefined> {
        const getProdutByName = await prisma.produt.findFirst({ where: { name }, }) || undefined
        return getProdutByName;

    }

    async delete(id: string): Promise<void> {
        await prisma.carry.delete({ where: { id } })
    }

    async update({ produtId, userId, id }: DataCarry): Promise<Carry> {
        const update = await prisma.carry.update({ where: { id }, data: { produtId, userId } })

        return update
    }


}
export { CarryRepository }