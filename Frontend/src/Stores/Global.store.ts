import { create } from "zustand";
import { CategoryI } from "../Types/Category.interface";
import { ProductFilterI, ProductI } from "../Types/Product.interface";

interface GlobalStoreI {
  categories: CategoryI[];
  setCategories: (categories: CategoryI[]) => void;
  loadingCategories: boolean;
  setLoadingCategories: (loading: boolean) => void;
  deleteCategory: (id: string) => void;

  products: ProductI[];
  setProducts: (products: ProductI[]) => void;
  deleteProduct: (id: string) => void;
  updateProduct: (product: ProductI) => void;
  totalProducts: number;
  setTotalProducts: (total: number) => void;
  loadingProducts: boolean;
  setLoadingProducts: (loading: boolean) => void;

  filterParams: ProductFilterI;
  setFilterParams: (params: ProductFilterI) => void;
}

const globalStore = create<GlobalStoreI>()((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
  loadingCategories: false,
  setLoadingCategories: (loading) => set({ loadingCategories: loading }),
  deleteCategory: (id) =>
    set((state) => ({ categories: state.categories.filter((category) => category.id !== id) })),
  products: [],
  setProducts: (products) => set({ products }),
  deleteProduct: (id) =>
    set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
  updateProduct: (product) =>
    set((state) => ({ products: state.products.map((p) => (p.id === product.id ? product : p)) })),
  totalProducts: 0,
  setTotalProducts: (total) => set({ totalProducts: total }),
  loadingProducts: false,
  setLoadingProducts: (loading) => set({ loadingProducts: loading }),
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
export default globalStore;
