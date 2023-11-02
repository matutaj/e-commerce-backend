import { Decimal } from "@prisma/client/runtime/library";
import { DataBuy, IBuy } from "../IBuy";
import { Buy } from "@prisma/client";
import { prisma } from "../../../../prisma";


class BuyRepository implements IBuy {
    async create({ cellfoneNumber, deliveryDate, localdelivery, produtId, totalPrice, userId, quant }: DataBuy): Promise<Buy> {
        const create = await prisma.buy.create({
            data: {
                cellfoneNumber, deliveryDate, localdelivery, produtId, totalPrice, userId, quant
            }
        })

        return create;
    }

    async getAllBuy(): Promise<Buy[]> {
        const getAllBuy = await prisma.buy.findMany()
        return getAllBuy;
    }

    async getByUserId(id: string): Promise<Buy[]> {
        const getByUserId = await prisma.buy.findMany({ where: { userId: id } })

        return getByUserId
    }

    async delete(id: string): Promise<void> {
        await prisma.buy.delete({ where: { id } })
    }

    async update({ id, cellfoneNumber, deliveryDate, localdelivery, produtId, totalPrice, userId }: DataBuy): Promise<Buy> {
        const update = await prisma.buy.update({
            where: { id }, data: {
                cellfoneNumber, deliveryDate, localdelivery, produtId, totalPrice, userId
            }
        })

        return update
    }

}

export { BuyRepository }
