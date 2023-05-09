import express from "express";
import { CreateUserController } from "../controller/create-user-controller.js";

const route = express.Router();

route.post("/user/create", await new CreateUserController().handle);

export default route;
