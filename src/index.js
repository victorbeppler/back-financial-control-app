import express from "express";
import User from "./routes/user-routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
  app.use("/api", User);
});
