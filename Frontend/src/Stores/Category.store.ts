import { create } from "zustand";
import { CategoryI } from "../Types/Category.interface";

interface CategoryStoreI {
  categories: CategoryI[];
  setCategories: (categories: CategoryI[]) => void;
  loadingCategories: boolean;
  setLoadingCategories: (loading: boolean) => void;
  deleteCategory: (id: string) => void;
  addCategory: (category: CategoryI) => void;
}

const categoryStore = create<CategoryStoreI>()((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
  loadingCategories: false,
  setLoadingCategories: (loading) => set({ loadingCategories: loading }),
  deleteCategory: (id) =>
    set((state) => ({ categories: state.categories.filter((category) => category.id !== id) })),
  addCategory: (category) => set((state) => ({ categories: [...state.categories, category] })),
}));
export default categoryStore;
