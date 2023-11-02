import { Buy } from "@prisma/client";
import { BuyRepository } from "../../repositories/implementations/BuyRepositories";
import { DataBuy } from "../../repositories/IBuy";
import { UserRepository } from "../../../user/repositories/Implementations/UserRepository";
import { ProdutRepository } from "../../../produt/repositories/implementations/ProdutRepository";
import { AppError } from "../../../../errors/AppError";


class CreateBuyUseCase {
    async execute({ cellfoneNumber, deliveryDate, localdelivery, produtId, totalPrice, userId }: DataBuy): Promise<Buy> {
        const buyRepository = new BuyRepository()
        const userRepository = new UserRepository()
        const produtRepository = new ProdutRepository()

        const userIdExsit = await userRepository.getById(userId)
        if (!userIdExsit) throw new AppError("Already Id User No Exist!")

        const produtIdExiste = await produtRepository.getById(produtId)
        if (!produtIdExiste) throw new AppError("Already Id Produt No Exist!", 400)

        const result = await buyRepository.create({ cellfoneNumber, deliveryDate, localdelivery, produtId, totalPrice, userId })

        return result

    }
}
export { CreateBuyUseCase }