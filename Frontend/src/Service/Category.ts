import { AddCategoryDto } from "../Types/Category.interface";
import { addProductDto } from "../Types/Product.interface";
import api from "../Utils/Api";

const categoryServices = {
  allCategories: () => api.get("product-category"),
  addCategory: (category: AddCategoryDto) => api.post("product-category", category),
  addCategories: (Categories: addProductDto[]) => api.post("product-category/many", Categories),
  deleteCategory: (id: string) => api.delete(`product-category/${id}`),
  deleteAllCategories: () => api.delete("product-category/delete-all"),
};

export default categoryServices;
