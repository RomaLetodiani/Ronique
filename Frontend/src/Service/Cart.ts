import api from "../Utils/Api";

const cartServices = {
  allCartProducts: () => api.get("/cart"),
  deleteCartProduct: (id: string) => api.delete(`/cart/${id}`),
  clearCart: () => api.post("/cart/clear"),
  addCartProduct: (product_id: string) => api.post("/cart", { product_id }),
};

export default cartServices;
