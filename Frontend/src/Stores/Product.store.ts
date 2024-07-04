import { create } from "zustand";
import { ProductI } from "../Types/Product.interface";

interface ProductStoreI {
  products: ProductI[];
  setProducts: (products: ProductI[]) => void;
  deleteProduct: (id: string) => void;
  addProduct: (product: ProductI) => void;
  updateProduct: (product: ProductI) => void;
  totalProducts: number;
  setTotalProducts: (total: number) => void;
  loadingProducts: boolean;
  setLoadingProducts: (loading: boolean) => void;
}

const productStore = create<ProductStoreI>()((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  deleteProduct: (id) =>
    set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
  addProduct: (product) =>
    set((state) => ({ products: [product, ...state.products.splice(1, 12)] })),
  updateProduct: (product) =>
    set((state) => ({ products: state.products.map((p) => (p.id === product.id ? product : p)) })),
  totalProducts: 0,
  setTotalProducts: (total) => set({ totalProducts: total }),
  loadingProducts: false,
  setLoadingProducts: (loading) => set({ loadingProducts: loading }),
}));

export default productStore;
