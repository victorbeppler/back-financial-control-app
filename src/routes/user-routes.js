import express from "express";
import { CreateUserController } from "../controller/create-user-controller.js";
import { UserSessionController } from "../controller/user-session-controller.js";
import { CheckTokenUserController } from "../controller/check-token-user-controller.js";

const route = express.Router();

route.post("/user/create", new CreateUserController().handle);

route.post("/user/session", new UserSessionController().handle);

route.post("/user/checktoken/:token", new CheckTokenUserController().handle);

export default route;
