import prisma from "../../db.js";
import crypto from "crypto";

export class User {
  async create(data) {
    const salt = crypto.randomBytes(16).toString("hex"); // uma string aleatória usada como "sal" para tornar o hash mais seguro
    const hash = crypto
      .pbkdf2Sync(data.password, salt, 1000, 64, "sha256")
      .toString("hex"); // o hash da senha usando PBKDF2 com SHA-256
    try {
      const response = await prisma.user.create({
        data: {
          name: data.username,
          email: data.email,
          password: hash,
          salt: salt,
        },
      });
      return { success: "Usuário criado com sucesso!"};
    } catch (e) {
      console.log(e.meta.target);
      return { error: "Erro ao criar usuário!", type: e.meta.target };
    }
  }

  async consult(email) {
    try {
      const response = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      return response;
    } catch (e) {
      console.log(e.meta.targer);
    }
  }
}
