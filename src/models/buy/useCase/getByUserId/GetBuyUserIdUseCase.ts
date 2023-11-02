import { Buy } from "@prisma/client";
import { BuyRepository } from "../../repositories/implementations/BuyRepositories";


class GetBuyUserIdUseCase {
    async execute(id: string): Promise<Buy[]> {
        const buyRepository = new BuyRepository();

        const result = await buyRepository.getByUserId(id);

        return result
    }
}
export { GetBuyUserIdUseCase }