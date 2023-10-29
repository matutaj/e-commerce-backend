import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authConfig } from "../../../../config/auth";
import { UserRepository } from "../../../user/repositories/Implementations/UserRepository";
import { SessionData, SessionReturn } from "../../repositories/ILogin";
import { LoginRepository } from "../../repositories/implementations/LoginRepository";
import { AppError } from "../../../../errors/AppError";

class CreateSessionUseCase {
  async execute({
    email,
    password,
  }: SessionData): Promise<SessionReturn | undefined> {
    const loginRepository = new LoginRepository();
    const userRepository = new UserRepository();

    const loginExists = await loginRepository.getByEmail(email);
    if (!loginExists)
      throw new AppError("This Session Email Does Not Exists!", 404);

    if (!(await bcrypt.compare(password, loginExists.passwordHash)))
      throw new AppError("Incorrect Password!", 400);

    if (loginExists.userId) {
      const user = await userRepository.getById(loginExists.userId);
      if (user)
        return {
          user: {
            email,
            id: user?.id,
            name: user.name,
            userType: user.typeUser,
          },
          token: jwt.sign({ ...user }, authConfig.key, {
            expiresIn: authConfig.expiresIn,
          }),
        };
    } else {
      throw new AppError("Somthing Went Wrong!", 500);
    }
  }
}

export { CreateSessionUseCase };
