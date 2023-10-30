import { Router } from "express";

import { CreateProdutController } from "../models/produt/useCase/create/CreateProdutController";


const createProdut = new CreateProdutController();


const produtroutes = Router();

produtroutes.post("/", createProdut.handle)

export { produtroutes }