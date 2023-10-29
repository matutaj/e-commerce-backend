import { Router } from "express";
import { typeContactRoutes } from "./typeContact.routes";
import { userRoutes } from "./user.routes";


const routes = Router();

routes.use("/contactType", typeContactRoutes)
routes.use("/user", userRoutes)
export { routes }