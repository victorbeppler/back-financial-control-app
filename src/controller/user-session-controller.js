import { User } from "../database/view/user.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export class UserSessionController {
  async handle(req, res) {
    const secretKey = "a2d3f4g5h6j7k8l9mnht2";
    // console.log(req);
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const user = await new User().consult(email);
    console.log(user);
    if (!user) {
      console.log("Usuário não encontrado!");
      return res.status(400).json({ error: "Usuário não encontrado!" });
    }
    const hashVerificador = crypto
      .pbkdf2Sync(password, user.salt, 1000, 64, "sha256")
      .toString("hex");
    if (user.password === hashVerificador) {
      const token = jwt.sign({ id: user.id }, secretKey, {
        expiresIn: "24h", // expires in 5min
      });
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({
        success: "Login realizado com sucesso!",
        token: token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    } else {
      res.status(400).json({ error: "Senha inválida!" });
    }
  }
}
