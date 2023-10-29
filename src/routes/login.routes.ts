import { Router } from "express";
import { CreateLoginController } from "../Login/useCase/createLogin/createLoginController";
import { CreateSessionController } from "../Login/useCase/createSession/createSessionController";

const createLoginController = new CreateLoginController();
const createSessionController = new CreateSessionController();

const loginRoutes = Router();

loginRoutes.post("/", createLoginController.handle);
loginRoutes.post("/session", createSessionController.handle)

export { loginRoutes };
