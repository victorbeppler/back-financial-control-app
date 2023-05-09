import express from "express";
import { CreateEnvironmentController } from "../controller/create-environment-controller.js";

const route = express.Router();

route.post("/environment/create", await new CreateEnvironmentController().handle);

export default route;
