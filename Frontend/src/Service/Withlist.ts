import api from "../Utils/Api";

const WishListServices = {
  allProducts: () => api.get("/liked-products"),
  addProduct: (product_id: string) => api.post("/cart", { product_id }),
  deleteProduct: (id: string) => api.delete(`/cart/${id}`),
};

export default WishListServices;
