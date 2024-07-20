import { create } from "zustand";
import { ProductFilterI } from "../Types/Product.interface";

export const initialFilterParams: ProductFilterI = {
  page: 1,
  pageSize: 12,
  minPrice: 0,
  maxPrice: 200,
  onlySales: false,
  categoryName: undefined,
};

interface FilteredStoreI {
  filterParams: ProductFilterI;
  setFilterParams: (params: ProductFilterI) => void;
}

const filteredStore = create<FilteredStoreI>()((set) => ({
  filterParams: initialFilterParams,
  setFilterParams: (params) =>
    set((state) => ({ filterParams: { ...state.filterParams, ...params } })),
}));
export default filteredStore;
