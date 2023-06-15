import { Category } from "../database/view/category.js";
import { Transaction } from "../database/view/transaction.js";
import { User } from "../database/view/user.js";

export class ConsultTransactionByEnvironmentController {
  async handle(req, res) {
    const { idEnvironment } = req.params;
    const transactions = await new Transaction().consultByEnvironment(
      idEnvironment.replace(/\D/g, "")
    );
    let response = [];
    if (transactions) {
      console.log("entrou");
      for (const transaction of transactions) {
        console;
        const user = await new User().consultById(transaction.userId);
        const category = await new Category().consultById(
          transaction.categoryId
        );
        response.push({
          id: transaction.id,
          description: transaction.description,
          amount: transaction.amount,
          dueDate: transaction.dueDate,
          status: transaction.status,
          environment: transaction.environmentId,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          category: {
            id: category.id,
            name: category.name,
            type: category.type,
          },
        });
      }
      return res.status(200).json(response);
    }
  }
}
