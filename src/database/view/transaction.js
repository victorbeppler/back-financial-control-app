import prisma from "../../db.js";

export class Transaction {
  async create(data) {
    try {
      const response = await prisma.Transaction.create({
        data: {
          description: data.description,
          amount: data.amount,
          datePaid: data.datePaid,
          dueDate: data.dueDate,
          environment: {
            connect: {
              id: data.environment,
            },
          },
          User: {
            connect: {
              id: data.user,
            },
          },
          category: {
            connect: {
              id: data.category,
            },
          },
        },
      });
      return { success: "Trasação criada com sucesso!" };
    } catch (e) {
      console.log(e);
      return { error: "Erro ao criar transação!", type: e?.meta?.target };
    }
  }
}
