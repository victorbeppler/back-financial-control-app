import express from "express";
import { CreateCategoryController } from "../controller/create-category-controller.js";

const route = express.Router();

route.post("/category/create", await new CreateCategoryController().handle);

export default route;
