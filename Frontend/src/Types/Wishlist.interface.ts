import { ProductI } from "./Product.interface";

export interface WishlistProductI {
  created_at: string;
  id: string;
  likedProduct: ProductI;
  product_id: string;
  updated_at: string;
  user_id: string;
}
