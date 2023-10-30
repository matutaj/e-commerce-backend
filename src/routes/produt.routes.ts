import { Router } from "express";

import { CreateProdutController } from "../models/produt/useCase/create/CreateProdutController";
import { GetAllProdutController } from "../models/produt/useCase/getAll/GetAllProdutController";

const createProdut = new CreateProdutController();
const getAllProdut = new GetAllProdutController();


const produtroutes = Router();

produtroutes.post("/", createProdut.handle)
produtroutes.get("/", getAllProdut.handle)

export { produtroutes }