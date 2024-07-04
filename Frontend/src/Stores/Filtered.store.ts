import { create } from "zustand";
import { ProductFilterI, ProductI } from "../Types/Product.interface";

interface FilterProductsStoreI {
  filteredProducts: ProductI[];
  setFilteredProducts: (products: ProductI[]) => void;
  totalFilteredProducts: number;
  setTotalFilteredProducts: (total: number) => void;
  loadingFilteredProducts: boolean;
  setLoadingFilteredProducts: (loading: boolean) => void;

  filterParams: ProductFilterI;
  setFilterParams: (params: ProductFilterI) => void;
}

const filteredProductsStore = create<FilterProductsStoreI>()((set) => ({
  filteredProducts: [],
  setFilteredProducts: (products) => set({ filteredProducts: products }),
  totalFilteredProducts: 0,
  setTotalFilteredProducts: (total) => set({ totalFilteredProducts: total }),
  loadingFilteredProducts: false,
  setLoadingFilteredProducts: (loading) => set({ loadingFilteredProducts: loading }),
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
