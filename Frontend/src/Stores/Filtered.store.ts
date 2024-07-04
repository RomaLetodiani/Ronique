import { create } from "zustand";
import { ProductFilterI } from "../Types/Product.interface";

interface FilterProductsStoreI {
  filterParams: ProductFilterI;
  setFilterParams: (params: ProductFilterI) => void;
}

const filteredProductsStore = create<FilterProductsStoreI>()((set) => ({
  filterParams: {
    page: 1,
    pageSize: 12,
    minPrice: 0,
    maxPrice: 1000,
    onlySales: false,
  },
  setFilterParams: (params) =>
    set((state) => ({ filterParams: { ...state.filterParams, ...params } })),
}));
export default filteredProductsStore;
