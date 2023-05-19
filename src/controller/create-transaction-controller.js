import { Transaction } from "../database/view/transaction.js";

export class CreateTransactionController {
  async handle(req, res) {
    const data = req.body;
    const response = await new Transaction().create(data);
    console.log(response);
    if (response.success) {
      return res.status(201).json(response);
    }
    return res.status(400).json(response?.error);
  }
}
