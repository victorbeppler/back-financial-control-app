import express from "express";
import { CreateTransactionController } from "../controller/create-transaction-controller.js";
import { ConsultTransactionByEnvironmentController } from "../controller/consult-transaction- by-environment-controller.js";

const route = express.Router();

route.post("/transaction/create", new CreateTransactionController().handle);

route.get(
  "/transaction/:idEnvironment/:yearMonth",
  new ConsultTransactionByEnvironmentController().handle
);

export default route;
