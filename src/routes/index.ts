import { Router } from "express";
import { typeContactRoutes } from "./typeContact.routes";
import { userRoutes } from "./user.routes";
import { loginRoutes } from "./login.routes";


const routes = Router();

routes.use("/contactType", typeContactRoutes)
routes.use("/user", userRoutes)
routes.use("/login", loginRoutes)
export { routes }