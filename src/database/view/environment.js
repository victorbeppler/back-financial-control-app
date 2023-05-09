import prisma from "../../db.js";

export class Environment {
  async create(data) {
    try {
      console.log(data);
      const response = await prisma.environment.create({
        data: {
          name: data.name,
          description: data.description,
          users: {
            connect: data.users,
          },
        },
      });
      return { success: "Ambiente criado com sucesso!" };
    } catch (e) {
      return { error: "Erro ao criar ambiente!", type: e.meta.target };
    }
  }
}
