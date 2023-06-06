import express from "express";
import { CreateCategoryController } from "../controller/create-category-controller.js";
import { ConsultCategoryByUserController } from "../controller/consult-category-by-user-controller.js";

const route = express.Router();

route.post("/category/create", new CreateCategoryController().handle);

route.get(
  "/category/:idEnvironment/:idUser",
  new ConsultCategoryByUserController().handle
);

export default route;
