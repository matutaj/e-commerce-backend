import { Category } from "@prisma/client";
import { CategoryRepository } from "../../repsoritory/implementations/CategoryRepository";
import { AppError } from "../../../../errors/AppError";


class CreateCategoryUseCase {
    async execute(name: string): Promise<Category> {
        const categoryRepository = new CategoryRepository()

        const nameExist = await categoryRepository.getByName(name)

        if (nameExist) throw new AppError("Already Name Exist!", 400)

        const result = await categoryRepository.create({ name })

        return result
    }
}
export { CreateCategoryUseCase }