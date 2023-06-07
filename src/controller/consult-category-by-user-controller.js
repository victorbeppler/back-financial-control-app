import { Category } from "../database/view/category.js";

export class ConsultCategoryByUserController {
  async handle(request, response) {
    const { idUser, idEnvironment } = request.params;
    const category = await new Category().consultByUserEnvironment(
      idUser,
      idEnvironment
    );
    if (category.error) {
      return response.status(400).json(category);
    }
    return response.status(200).json(category);
  }
}
