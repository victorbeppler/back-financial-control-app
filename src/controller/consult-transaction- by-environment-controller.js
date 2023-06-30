import { Category } from "../database/view/category.js";
import { Transaction } from "../database/view/transaction.js";
import { User } from "../database/view/user.js";

export class ConsultTransactionByEnvironmentController {
  async handle(req, res) {
    try {
      const { idEnvironment, yearMonth } = req.params;
      // console.log(idEnvironment, yearMonth);
      const transactions = await new Transaction().consultByMonthAndEnvironment(
        idEnvironment?.replace(/\D/g, ""),
        yearMonth
      );
      let response = [];
      if (transactions) {
        for (const transaction of transactions) {
          // console;
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
    } catch (e) {
      return res.status(400).json({ error: "Erro ao consultar transações!" });
    }
  }
}
