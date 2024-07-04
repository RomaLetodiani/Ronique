import { create } from "zustand";
import { ProductFilterI } from "../Types/Product.interface";

export const initialFilterParams: ProductFilterI = {
  page: 1,
  pageSize: 12,
  minPrice: 0,
  maxPrice: 1000,
  onlySales: false,
};

interface FilterProductsStoreI {
  filterParams: ProductFilterI;
  setFilterParams: (params: ProductFilterI) => void;
}

const filteredProductsStore = create<FilterProductsStoreI>()((set) => ({
  filterParams: initialFilterParams,
  setFilterParams: (params) =>
    set((state) => ({ filterParams: { ...state.filterParams, ...params } })),
}));
export default filteredProductsStore;
