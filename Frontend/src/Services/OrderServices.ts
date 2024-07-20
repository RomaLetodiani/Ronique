import { api } from "@/Utils";

const orderServices = {
  buy: (order: { totalPrice: number; totalItems: number }) => api.post("purchases", order),
  singleOrder: (id: string) => api.get(`purchases${id}`),
  cancel: (id: string) => api.delete(`purchases/${id}`),
  getHistory: () => api.get("purchases"),
};

export default orderServices;
