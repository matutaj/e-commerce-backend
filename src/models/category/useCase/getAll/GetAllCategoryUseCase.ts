import { Category } from "@prisma/client";
import { CategoryRepository } from "../../repsoritory/implementations/CategoryRepository";



class GetAllCategoryUseCase {
    async execute(): Promise<Category[]> {
        const cagtegoryRepository = new CategoryRepository();

        const result = await cagtegoryRepository.getAll();

        return result
    }
}
export { GetAllCategoryUseCase }