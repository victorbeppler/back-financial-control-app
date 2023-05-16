import { Category } from "../database/view/category.js";

export class CreateCategoryController {
  async handle(req, res) {
    const data = req.body;
    const response = await new Category().create(data);
    if (response.success)
      res.status(201).json({ success: "Categoria criada com sucesso!" });
    else res.status(401).json(response);
  }
}
