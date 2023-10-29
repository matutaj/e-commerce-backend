import { Login } from "@prisma/client";

export interface LoginData {
  email: string;
  userId: string;
  passwordHash: string;
  passwordTokenSet?: string;
}

export interface SessionData {
  email: string;
  password: string;
}

export interface SessionReturn {
  user: {
    id: string;
    name: string;
    email: string;
    userType?: string;
  };
  token: string;
}

export interface ILogin {
  create({ }: LoginData): Promise<Login>;
  getByEmail(email: string): Promise<Login | undefined>;
  update({ }: LoginData): Promise<Login>;
  getByUserId(userId: string): Promise<Login | undefined>;
  delete(email: string): Promise<void>;
}
