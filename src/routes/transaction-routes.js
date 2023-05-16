import express from "express";
import { CreateTransactionController } from "../controller/create-transaction-controller.js";

const route = express.Router();

route.post(
  "/transaction/create",
  await new CreateTransactionController().handle
);

export default route;
