import { Router } from "express";

import { CreateProdutController } from "../models/produt/useCase/create/CreateProdutController";
import { GetAllProdutController } from "../models/produt/useCase/getAll/GetAllProdutController";
import { GetByNameProdutController } from "../models/produt/useCase/getByName/GetByNameProdutController";


const createProdut = new CreateProdutController();
const getAllProdut = new GetAllProdutController();
const getByNameProdut = new GetByNameProdutController();

const produtroutes = Router();

produtroutes.post("/", createProdut.handle)
produtroutes.get("/", getAllProdut.handle)
produtroutes.get("/:nameProdut", getByNameProdut.handle)

export { produtroutes }