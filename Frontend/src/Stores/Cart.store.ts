import { create } from "zustand";

// TODO: Check if the ProductI is correct interface
import { ProductI } from "../Types/Product.interface";

interface CartProductStoreI {
  CartProducts: ProductI[];
  setCartProducts: (products: ProductI[]) => void;
}

const cartProductStore = create<CartProductStoreI>()((set) => ({
  CartProducts: [],
  setCartProducts: (products) => set({ CartProducts: products }),
}));
export default cartProductStore;
