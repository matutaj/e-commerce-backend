import { Router } from "express";
import { typeContactRoutes } from "./typeContact.routes";


const routes = Router();

routes.use("/contactType", typeContactRoutes)
export { routes }