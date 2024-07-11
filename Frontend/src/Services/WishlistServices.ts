import api from "../Utils/Api";

const WishListServices = {
  allProducts: () => api.get("liked-products"),
  addProduct: (product_id: string) => api.post("liked-products", { product_id }),
  deleteProduct: (id: string) => api.delete(`liked-products/${id}`),
};

export default WishListServices;
