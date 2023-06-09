import { User } from "../database/view/user.js";

export class CreateUserController {
  async handle(req, res) {
    const data = req.body;
    const validateEmail = await new User().consult(data.email);
    if (validateEmail)
      return res.status(401).json({ error: "Email já cadastrado!" });
    else {
      const response = await new User().create(data);
      if (response.success)
        res.status(201).json({ success: "Usuário criado com sucesso!" });
      else res.status(401).json(response);
    }
  }
}
