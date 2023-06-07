import prisma from "../../db.js";

export class Environment {
  async create(data) {
    try {
      const response = await prisma.environment.create({
        data: {
          name: data.name,
          description: data.description,
        },
      });
      if (response) {
        const associateUser = await prisma.userEnvironment.create({
          data: {
            user: {
              connect: { id: data.user },
            },
            environment: {
              connect: { id: response.id },
            },
          },
        });
      }
      return { success: "Ambiente criado com sucesso!" };
    } catch (e) {
      return { error: "Erro ao criar ambiente!", type: e?.meta?.target };
    }
  }
  async consultByUser(idUser) {
    try {
      const response = await prisma.userEnvironment.findMany({
        where: {
          userId: parseInt(idUser),
        },
        select: {
          environment: true,
        },
      });
      return { success: response };
    } catch (e) {
      return { error: "Erro ao consultar ambiente!", type: e?.meta?.target };
    }
  }
}
