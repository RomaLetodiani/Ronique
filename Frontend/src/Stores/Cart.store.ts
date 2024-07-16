import { create } from "zustand";

import { CartProductI } from "../Types/Cart.interface";

interface CartProductStoreI {
  CartProducts: CartProductI[];
  setCartProducts: (products: CartProductI[]) => void;
  loadingCartProducts: boolean;
  setLoadingCartProducts: (loading: boolean) => void;
  addCartProduct: (product: CartProductI) => void;
  removeSingleCartProduct: (productId: string) => void;
  removeAllCartProduct: (productId: string) => void;
  clearCart: () => void;
}

const cartProductStore = create<CartProductStoreI>()((set) => ({
  CartProducts: [],
  setCartProducts: (products) => set({ CartProducts: products }),
  loadingCartProducts: false,
  setLoadingCartProducts: (loading) => set({ loadingCartProducts: loading }),
  addCartProduct: (product) =>
    set((state) => {
      const productIndex = state.CartProducts.findIndex((p) => p.id === product.id);
      if (productIndex === -1) {
        return { CartProducts: [...state.CartProducts, product] };
      }
      const newCartProducts = [...state.CartProducts];
      newCartProducts[productIndex] = product;
      return { CartProducts: newCartProducts };
    }),
  removeSingleCartProduct: (productId) => {
    set((state) => {
      const newCartProducts = state.CartProducts.map((p) => {
        if (p.id === productId) {
          return { ...p, count: p.count - 1 };
        }
        return p;
      });

      return { CartProducts: newCartProducts.filter((p) => p.count > 0) };
    });
  },
  removeAllCartProduct: (productId) => {
    set((state) => ({
      CartProducts: state.CartProducts.filter((product) => product.id !== productId),
    }));
  },
  clearCart: () => set({ CartProducts: [] }),
}));
export default cartProductStore;
