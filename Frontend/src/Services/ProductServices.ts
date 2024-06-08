import { ProductFilterI, addProductDto } from "../Types/Product.interface";
import api from "../Utils/Api";

const productServices = {
  allProducts: (params?: ProductFilterI) => api.get("product", { params }),
  getProduct: (productId: string) => api.get(`product/${productId}`),
  addProduct: (product: addProductDto) => api.post("product", product),
  addProducts: (products: addProductDto[]) => api.post("product/many", { products }),
  deleteProducts: (ids: string[]) => api.delete("product", { data: { ids } }),
  deleteAllProducts: () => api.delete("product/delete-all"),
  updateProduct: (body: { id: string; image: string }) => api.put("product", body),
};

export default productServices;
