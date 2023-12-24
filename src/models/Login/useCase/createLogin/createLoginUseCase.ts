import { Login } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AppError } from "../../../../errors/AppError";
import { UserRepository } from "../../../user/repositories/Implementations/UserRepository";
import { LoginData } from "../../repositories/ILogin";
import { LoginRepository } from "../../repositories/implementations/LoginRepository";

class CreateLoginUseCase {
  async execute({ email, passwordHash, userId }: LoginData): Promise<Login> {
    const loginRepository = new LoginRepository();
    const userRepository = new UserRepository();

    const loginAlreadyExists = await loginRepository.getByEmail(email);
    if (loginAlreadyExists)
      throw new AppError(`This Email ${email} Already Exists! `);

    if (userId)
      throw new AppError(
        "You Can Pass Only The User or the Institution Id, Never Both!",
        400
      );

    if (!userId)
      throw new AppError(
        "You Have To Pass At Only One, Can be User or the Institution Id!",
        400
      );

    if (userId) {
      const userExists = await userRepository.getById(userId);
      if (!userExists) throw new AppError("This User Does Not Exists!", 404);

      const userLoginAlreadyExists = await loginRepository.getByUserId(userId);
      if (userLoginAlreadyExists)
        throw new AppError("This User Already Have a Session Data!", 400);
    }

    const password = await bcrypt.hash(passwordHash, 8);

    const login = await loginRepository.create({
      email,
      passwordHash: password,
      userId,
    });

    return login;
  }
}

export { CreateLoginUseCase };
