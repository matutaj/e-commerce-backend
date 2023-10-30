import { Produt } from "@prisma/client";
import { ProdutRepository } from "../../repositories/implementations/ProdutRepository";
import { AppError } from "../../../../errors/AppError";



class GetByNameProdutUseCase {
    async execute(name: string): Promise<Produt> {
        const produtRepository = new ProdutRepository();

        const nameExit = await produtRepository.getByName(name)

        if (!nameExit) throw new AppError("Already Name Not Exit!", 400)

        return nameExit
    }
}
export { GetByNameProdutUseCase }