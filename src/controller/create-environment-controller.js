import { Environment } from "../database/view/environment.js";

export class CreateEnvironmentController {
  async handle(req, res) {
    const data = req.body;
    const response = await new Environment().create(data);
    if (response.success)
      res.status(201).json({ success: "Ambiente criado com sucesso!" });
    else res.status(401).json(response);
  }
}
