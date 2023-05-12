import prisma from "../../db.js";

export class Category {
  async create(data) {
    try {
      const response = await prisma.category.create({
        data: {
          name: data.name,
          type: data.description,
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
        },
      });
      return { success: "Categoria criada com sucesso!" };
    } catch (e) {
      console.log(e);
      return { error: "Erro ao criar categoria!", type: e?.meta?.target };
    }
  }
}
