import prisma from "../../db.js";

export class Transaction {
  async create(data) {
    try {
      const response = await prisma.Transaction.create({
        data: {
          description: data.description,
          amount: parseFloat(data.amount),
          dueDate: data.dueDate,
          status: data.status,
          environment: {
            connect: {
              id: parseInt(data.environment),
            },
          },
          User: {
            connect: {
              id: parseInt(data.user),
            },
          },
          category: {
            connect: {
              id: parseInt(data.category),
            },
          },
        },
      });
      return { success: "Transação criada com sucesso!" };
    } catch (e) {
      return { error: "Erro ao criar transação!", type: e?.meta?.target };
    }
  }
  async consultByEnvironment(idEnvironment) {
    try {
      const response = await prisma.Transaction.findMany({
        where: {
          environmentId: parseInt(idEnvironment),
        },
      });
      return response;
    } catch (e) {
      console.log(e);
      return { error: "Erro ao consultar transações!", type: e?.meta?.target };
    }
  }
  async consultByMonthAndEnvironment(idEnvironment, yearMonth) {
    try {
      const response = await prisma.Transaction.findMany({
        where: {
          environmentId: parseInt(idEnvironment),
          dueDate: {
            gte: new Date(`${yearMonth}-01`),
            lt: new Date(`${yearMonth}-31`),
          },
        },
      });
      // console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return { error: "Erro ao consultar transações!", type: e?.meta?.target };
    }
  }

  async delete(id) {
    try {
      const response = await prisma.Transaction.delete({
        where: {
          id: parseInt(id),
        },
      });
      return { success: "Transação deletada com sucesso!" };
    } catch (error) {
      console.log(error);
      return {
        error: "Erro ao deletar transação!",
        type: error?.meta?.target ?? error?.meta?.cause,
      };
    }
  }
}
