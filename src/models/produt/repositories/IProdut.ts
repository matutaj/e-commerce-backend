import { Produt } from "@prisma/client"


interface IProdutData {
    Id?: string
    name: string
    imageUrl?: string
    categoryId: string
    quant: number
    cost: number
}

interface IProdut {
    create({ }: IProdutData): Promise<Produt>
    getById(id: string): Promise<Produt | undefined>
    getAll(): Promise<Produt[]>
    getByName(name: string): Promise<Produt | undefined>
    getProdutByCategoryId(id: string): Promise<Produt | undefined>
    delete(id: string): Promise<void>
    update({ }: IProdutData): Promise<Produt>
}