import { User } from "@prisma/client";
import { UserRepository } from "../../repositories/Implementations/UserRepository";


class GetUserAllUseCase {
    async execute(): Promise<User[]> {
        const userRepositories = new UserRepository();

        const result = await userRepositories.getAll();

        return result
    }
}
export { GetUserAllUseCase }