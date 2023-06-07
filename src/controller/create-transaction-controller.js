import { Transaction } from "../database/view/transaction.js";
import { ModelTransaction } from "../model/transaction.js";

export class CreateTransactionController {
  async handle(req, res) {
    const data = req.body;
    const transaction = new ModelTransaction(data);
    if (!transaction.category) {
      return res.status(400).json({ error: "Category not found" });
    }
    const response = await new Transaction().create(transaction);
    if (response.success) {
      return res.status(201).json(response);
    }
    return res.status(400).json(response?.error);
  }
}
