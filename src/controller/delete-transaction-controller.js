import { Transaction } from "../database/view/transaction.js";

export class DeleteTransactionController {
  async handle(req, res) {
    const { id } = req.params;

    const response = await new Transaction().delete(id);
    if (response.error)
      return res
        .status(400)
        .json({ error: response.error, type: response.type });
    return res.status(200).json(response);
  }
}
