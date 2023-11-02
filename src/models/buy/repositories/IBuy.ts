import { Buy } from "@prisma/client"


export interface DataBuy {
    id?: string
    deliveryDate: Date
    localdelivery: string
    cellfoneNumber: number
    totalPrice: number
    userId: string
    quant: number
    produtId: string
}

export interface IBuy {
    create({ }: DataBuy): Promise<Buy>
    getAllBuy(): Promise<Buy[]>
    getByUserId(id: string): Promise<Buy[]>
    delete(id: string): Promise<void>
    update({ }: DataBuy): Promise<Buy>

}