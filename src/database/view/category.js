import prisma from "../../db.js";

export class Category {
  async create(data) {
    try {
      const response = await prisma.environment.create({
        data: {
          name: data.name,
          type: data.description,
          environment: {
            connect: data.environment,
          },
          User: {
            connect: data.user,
          },
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
      return { error: "Erro ao criar categoria!", type: e?.meta?.target };
    }
  }
}
