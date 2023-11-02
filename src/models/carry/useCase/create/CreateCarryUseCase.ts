import { Carry } from "@prisma/client";
import { DataCarry } from "../../repositories/ICarry";
import { CarryRepository } from "../../repositories/implementations/CarryRepository";
import { ProdutRepository } from "../../../produt/repositories/implementations/ProdutRepository";
import { UserRepository } from "../../../user/repositories/Implementations/UserRepository";
import { AppError } from "../../../../errors/AppError";


class CreateCarryUseCase {
    async execute({ produtId, userId }: DataCarry): Promise<Carry> {
        const carryRepository = new CarryRepository()
        const produtRepository = new ProdutRepository()
        const userRepository = new UserRepository()


        const produtIdExist = await produtRepository.getById(produtId)
        if (!produtIdExist) throw new AppError("Already Id Produt No Exist", 400)

        const userIdExist = await userRepository.getById(userId)
        if (!userIdExist) throw new AppError("Already Id User No Exist", 400)

        const result = await carryRepository.create({ produtId, userId })

        return result

    }
}
export { CreateCarryUseCase }