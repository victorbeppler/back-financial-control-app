import express from "express";
import { User } from "../database/view/user.js";

const route = express.Router();

route.post("/user/create", async (req, res) => {
  const data = req.body;
  const response = await new User().create(data);
  res.json(response);
});

export default route;
