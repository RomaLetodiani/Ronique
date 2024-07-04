import { create } from "zustand";

// TODO: Check if the ProductI is correct interface
import { ProductI } from "../Types/Product.interface";

interface WishlistProductStoreI {
  wishlistProducts: ProductI[];
  setWishlistProducts: (products: ProductI[]) => void;
}

const wishlistProductStore = create<WishlistProductStoreI>()((set) => ({
  wishlistProducts: [],
  setWishlistProducts: (products) => set({ wishlistProducts: products }),
}));
export default wishlistProductStore;
