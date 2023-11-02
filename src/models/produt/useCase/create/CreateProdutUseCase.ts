import { Produt } from "@prisma/client";
import { AppError } from "../../../../errors/AppError"
import { IProdutData } from "../../repositories/IProdut"
import { ProdutRepository } from "../../repositories/implementations/ProdutRepository"
import { CategoryRepository } from "../../../category/repsoritory/implementations/CategoryRepository";


class CreateProdutUseCase {
    async execute({ name, categoryId, cost, quant, imageUrl }: IProdutData): Promise<Produt> {
        const produtRepository = new ProdutRepository()
        const categoryRepository = new CategoryRepository();

        const categoryIdExit = await categoryRepository.getById(categoryId)

        if (!categoryIdExit) throw new AppError("Already Name Not Exist", 400);

        const nameExit = await produtRepository.getByName(name);

        if (nameExit) throw new AppError("Already Name Exist", 400);

        const result = await produtRepository.create({ name, categoryId, cost, quant, imageUrl })

        return result

    }
}

export { CreateProdutUseCase }