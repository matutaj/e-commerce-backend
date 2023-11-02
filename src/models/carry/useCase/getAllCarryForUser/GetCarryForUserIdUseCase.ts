import { Carry } from "@prisma/client";
import { CarryRepository } from "../../repositories/implementations/CarryRepository";
import { UserRepository } from "../../../user/repositories/Implementations/UserRepository";
import { AppError } from "../../../../errors/AppError";


class GetAllCarryForUserUseCase {
    async execute(id: string): Promise<Carry[]> {
        const carryRepository = new CarryRepository()
        const userRepository = new UserRepository()

        const userIdExist = await userRepository.getById(id)
        if (!userIdExist) throw new AppError("Already Id User No Exist", 400)

        const result = await carryRepository.getAll(id)

        return result


    }
}
export { GetAllCarryForUserUseCase }