import prisma from "../../db.js";
import crypto from "crypto";

export class User {
  async create(data) {
    const password = data.password; // a senha que você quer codificar
    const salt = crypto.randomBytes(16).toString("hex"); // uma string aleatória usada como "sal" para tornar o hash mais seguro
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha256")
      .toString("hex"); // o hash da senha usando PBKDF2 com SHA-256
    try {
      const response = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: password,
        },
      });
      return response;
    } catch (e) {
      console.log(e.meta);
    }
  }
}
