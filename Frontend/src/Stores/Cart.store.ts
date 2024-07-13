import { create } from "zustand";

// TODO: Check if the ProductI is correct interface
import { ProductI } from "../Types/Product.interface";

interface CartProductStoreI {
  CartProducts: ProductI[];
  setCartProducts: (products: ProductI[]) => void;
  loadingCartProducts: boolean;
  setLoadingCartProducts: (loading: boolean) => void;
  addCartProduct: (product: ProductI) => void;
  removeCartProduct: (productId: string) => void;
  clearCart: () => void;
}

const cartProductStore = create<CartProductStoreI>()((set) => ({
  CartProducts: [],
  setCartProducts: (products) => set({ CartProducts: products }),
  loadingCartProducts: false,
  setLoadingCartProducts: (loading) => set({ loadingCartProducts: loading }),
  addCartProduct: (product) => set((state) => ({ CartProducts: [...state.CartProducts, product] })),
  removeCartProduct: (productId) => {
    set((state) => ({
      CartProducts: state.CartProducts.filter((product) => product.id !== productId),
    }));
  },
  clearCart: () => set({ CartProducts: [] }),
}));
export default cartProductStore;
