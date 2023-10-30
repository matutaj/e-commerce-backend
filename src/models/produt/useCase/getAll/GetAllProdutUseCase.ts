import { Produt } from "@prisma/client";
import { ProdutRepository } from "../../repositories/implementations/ProdutRepository";



class GetAllProdutUseCase {
    async execute(): Promise<Produt[]> {
        const produtRepository = new ProdutRepository();

        const result = await produtRepository.getAll();

        return result
    }
}
export { GetAllProdutUseCase }