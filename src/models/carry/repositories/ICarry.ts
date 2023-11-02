import { Carry, Produt } from "@prisma/client"


export interface DataCarry {
    id?: string
    produtId: string
    userId: string
}

export interface ICarry {
    create({ }: DataCarry): Promise<Carry>
    getAll(id: string): Promise<Carry[]>
    getById(id: string): Promise<Carry | undefined>
    getByName(name: string): Promise<Produt | undefined>
    delete(id: string): Promise<void>
    update({ }: DataCarry): Promise<Carry>
}