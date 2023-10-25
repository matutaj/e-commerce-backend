import { Router } from "express";
import { CreateTypeContactController } from "../models/contactType/useCase/createTypeContact";
import { UpdateTypeContactController } from "../models/contactType/useCase/updateTypeContact/updateTypeContactController";
import { GetAllTypeContactController } from "../models/contactType/useCase/getAllTypeContact/getAllTypeContactController";
import { GetTypeContactByIdController } from "../models/contactType/useCase/getTypeContactById/getTypeContactByIdController";
import { DeleteTypeContactController } from "../models/contactType/useCase/deleteTypeContact/deleteTypeContactController";
import { GetTypeContactByDescriptionController } from "../models/contactType/useCase/getTypeContactByDescription/getTypeContactByIdController";

const createContactTypeController = new CreateTypeContactController();
const updateContactTypeController = new UpdateTypeContactController();
const getAllContactTypeController = new GetAllTypeContactController();
const getTypeContactById = new GetTypeContactByIdController();
const deleteTypeContact = new DeleteTypeContactController();
const getTypeContactByDescriptionController =
  new GetTypeContactByDescriptionController();

const typeContactRoutes = Router();

typeContactRoutes.get("/:id", getTypeContactById.handle);
typeContactRoutes.get(
  "/desc/:description",
  getTypeContactByDescriptionController.handle
);
typeContactRoutes.get("/", getAllContactTypeController.handle);
typeContactRoutes.post("/", createContactTypeController.handle);
typeContactRoutes.put("/:id", updateContactTypeController.handle);
typeContactRoutes.delete("/:id", deleteTypeContact.handle);

export { typeContactRoutes };
