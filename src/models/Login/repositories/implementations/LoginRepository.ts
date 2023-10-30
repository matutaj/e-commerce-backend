import { Login } from "@prisma/client";
import { ILogin, LoginData } from "../ILogin";
import { prisma } from "../../../../prisma";

class LoginRepository implements ILogin {
  async create({
    email,
    passwordHash,
    userId,
    passwordTokenSet,
  }: LoginData): Promise<Login> {
    const createdLogin = await prisma.login.create({
      data: { email, passwordHash, userId, passwordTokenSet },
    });

    return createdLogin;
  }

  async getByEmail(email: string): Promise<Login | undefined> {
    const login =
      (await prisma.login.findUnique({ where: { email } })) || undefined;

    return login;
  }

  async getByUserId(userId: string): Promise<Login | undefined> {
    const login =
      (await prisma.login.findFirst({ where: { userId } })) || undefined;

    return login;
  }

  async update({
    email,
    passwordHash,
    userId,
    passwordTokenSet,
  }: LoginData): Promise<Login> {
    const updatedLogin = await prisma.login.update({
      where: { email },
      data: { passwordHash, userId, passwordTokenSet },
    });

    return updatedLogin;
  }

  async delete(email: string): Promise<void> {
    await prisma.login.delete({ where: { email } });
  }
}

export { LoginRepository };
