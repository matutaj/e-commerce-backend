import { TypeUser, User } from "@prisma/client"


export interface DataUser {
    id?: string
    name: string
    typeUser: TypeUser
    imageUrl: string
}

export interface IUser {
    create({ }: DataUser): Promise<User>
    getById(id: string): Promise<User | undefined>
    getAll(): Promise<User[]>
    delete(id: string): Promise<void>
    update({ }: DataUser): Promise<User>
}

