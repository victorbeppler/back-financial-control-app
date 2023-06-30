import { Environment } from "../database/view/environment.js";

export class ConsultenvironmentByUserController {
  async handle(req, res) {
    const { idUser } = req.params;
    // console.log(idUser);
    const response = await new Environment().consultByUser(idUser);
    if (response.success) res.status(200).json(response);
    else res.status(401).json(response);
  }
}
