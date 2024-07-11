import cartServices from "../../Services/CartServices";
import { toast } from "react-toastify";
import WishListServices from "../../Services/WishlistServices";

export const handleActions = (id: string, action: "cart" | "wishlist") => {
  if (action === "cart") {
    cartServices.addCartProduct(id).then(() => {
      toast.success("Product added to cart");
    });
  } else {
    WishListServices.addProduct(id).then(() => {
      toast.success("Product added to wishlist");
    });
  }
};
