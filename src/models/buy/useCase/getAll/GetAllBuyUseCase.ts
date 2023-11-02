import { Buy } from "@prisma/client";
import { BuyRepository } from "../../repositories/implementations/BuyRepositories";


class GetAllBuyUseCase {
    async execute(): Promise<Buy[]> {
        const buyRepository = new BuyRepository();

        const result = await buyRepository.getAllBuy();

        return result
    }
}
export { GetAllBuyUseCase }