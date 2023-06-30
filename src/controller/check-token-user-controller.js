import jwt from "jsonwebtoken";

export class CheckTokenUserController {
  async handle(req, res) {
    const secretKey = process.env.SECRET_SESSION;
    console.log(secretKey);
    // console.log(req);
    const { token } = req.params;
    if (!token) {
      return res.status(401).json({ error: "Token não encontrado!" });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Token inválido!" });
      }
      return res.status(200).json({ success: "Token válido!" });
    });
  }
}
