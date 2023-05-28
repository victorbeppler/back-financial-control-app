import express from "express";
import { CreateUserController } from "../controller/create-user-controller.js";
import { UserSessionController } from "../controller/user-session-controller.js";

const route = express.Router();

route.post("/user/create", await new CreateUserController().handle);

route.post("/user/session", await new UserSessionController().handle);

export default route;
