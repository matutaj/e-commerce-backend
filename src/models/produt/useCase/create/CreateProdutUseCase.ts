import { Produt } from "@prisma/client";
import { AppError } from "../../../../errors/AppError"
import { IProdutData } from "../../repositories/IProdut"
import { ProdutRepository } from "../../repositories/implementations/ProdutRepository"


class CreateProdutUseCase {
    async execute({ name, categoryId, cost, quant, imageUrl }: IProdutData): Promise<Produt> {
        const produtRepository = new ProdutRepository()

        const nameExit = await produtRepository.getByName(name);

        if (nameExit) throw new AppError("Already Name Exist", 400);

        const result = await produtRepository.create({ name, categoryId, cost, quant, imageUrl })

        return result

    }
}

export { CreateProdutUseCase }