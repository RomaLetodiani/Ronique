import { create } from "zustand";
import { WishlistProductI } from "../Types/Wishlist.interface";

interface WishlistProductStoreI {
  wishlistProducts: WishlistProductI[];
  setWishlistProducts: (products: WishlistProductI[]) => void;
  loadingWishlistProducts: boolean;
  setLoadingWishlistProducts: (loading: boolean) => void;
  addWishlistProduct: (product: WishlistProductI) => void;
  removeWishlistProduct: (productId: string) => void;
  clearWishlist: () => void;
}

const wishlistProductStore = create<WishlistProductStoreI>()((set) => ({
  wishlistProducts: [],
  setWishlistProducts: (products) => set({ wishlistProducts: products }),
  loadingWishlistProducts: false,
  setLoadingWishlistProducts: (loading) => set({ loadingWishlistProducts: loading }),
  addWishlistProduct: (product) =>
    set((state) => ({ wishlistProducts: [...state.wishlistProducts, product] })),
  removeWishlistProduct: (productId) => {
    set((state) => ({
      wishlistProducts: state.wishlistProducts.filter((product) => product.id !== productId),
    }));
  },
  clearWishlist: () => set({ wishlistProducts: [] }),
}));
export default wishlistProductStore;
