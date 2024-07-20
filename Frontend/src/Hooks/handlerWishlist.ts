import { toast } from "react-toastify";
import WishListServices from "../Services/WishlistServices";
import { authStore, productStore, wishlistProductStore } from "../Stores";

const handlerWishlist = () => {
  const { wishlistProducts, addWishlistProduct, removeWishlistProduct } = wishlistProductStore();
  const { products } = productStore();
  const { accessToken } = authStore();
  const handleWishlistActions = (id: string) => {
    if (!accessToken) {
      toast.info("You need to login first");
      return;
    }

    const product = wishlistProducts.find((product) => product.product_id === id);
    if (product) {
      WishListServices.deleteProduct(product.id).then(() => {
        removeWishlistProduct(product.id);
        toast.success("Product removed from wishlist");
      });
    } else {
      WishListServices.addProduct(id).then(({ data }) => {
        const product = products.find((product) => product.id === data.product_id);
        data.likedProduct = product;
        addWishlistProduct(data);
        toast.success("Product added to wishlist");
      });
    }
  };

  const isInWishlist = (id: string) =>
    wishlistProducts.some((product) => product.product_id === id);

  return { handleWishlistActions, isInWishlist };
};

export default handlerWishlist;
