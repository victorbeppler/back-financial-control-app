import express from "express";
import { CreateEnvironmentController } from "../controller/create-environment-controller.js";
import { ConsultenvironmentByUserController } from "../controller/consult-environment-by-user-controller.js";

const route = express.Router();

route.post(
  "/environment/create",
  await new CreateEnvironmentController().handle
);

route.get(
  "/environment/:idUser",
  new ConsultenvironmentByUserController().handle
);

export default route;
