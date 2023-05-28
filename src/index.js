import express from "express";
import User from "./routes/user-routes.js";
import Environment from "./routes/environment-routes.js";
import Category from "./routes/category-routes.js";
import Transaction from "./routes/transaction-routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
  app.use("/status", (req, res) => {
    res.send({ status: "ok" });
  });
  app.use("/api", User);
  app.use("/api", Environment);
  app.use("/api", Category);
  app.use("/api", Transaction);
});
