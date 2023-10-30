import { Router } from "express";
import { typeContactRoutes } from "./typeContact.routes";
import swaggerUi from "swagger-ui-express";
// import swaggerDoc from "../swagger.json";
import { userRoutes } from "./user.routes";
import { loginRoutes } from "./login.routes";
import { produtroutes } from "./produt.routes";
import { categoryRoutes } from "./category.routes";


const routes = Router();

// routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

routes.use("/contactType", typeContactRoutes)
routes.use("/user", userRoutes)
routes.use("/login", loginRoutes)
routes.use("/category", categoryRoutes)
routes.use("/produt", produtroutes)

export { routes }