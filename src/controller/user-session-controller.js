import { User } from "../database/view/user.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export class UserSessionController {
  async handle(req, res) {
    const secretKey = process.env.SECRET_SESSION;
    const { email, password } = req.body;
    const user = await new User().consult(email);
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    }
    const hashVerificador = crypto
      .pbkdf2Sync(password, user.salt, 1000, 64, "sha256")
      .toString("hex");
    if (user.password === hashVerificador) {
      const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email },
        secretKey,
        {
          expiresIn: "1h", // expires in 5min
        }
      );
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
