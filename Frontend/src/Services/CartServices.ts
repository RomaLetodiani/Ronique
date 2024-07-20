import { api } from "@/Utils";

const cartServices = {
  allCartProducts: () => api.get("cart"),
  deleteCartProduct: ({ id, removeAll = false }: { id: string; removeAll?: boolean }) =>
    api.delete(`cart/${id}`, { params: { removeAll } }),
  clearCart: () => api.post("cart/clear"),
  addCartProduct: (product_id: string) => api.post("cart", { product_id }),
};

export default cartServices;
