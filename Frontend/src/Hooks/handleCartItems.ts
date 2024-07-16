import cartProductStore from "../Stores/Cart.store";
import authStore from "../Stores/Auth.store";
import cartServices from "../Services/CartServices";
import { toast } from "react-toastify";

const handleCartItems = () => {
  const { user } = authStore();
  const { clearCart, addCartProduct, removeSingleCartProduct, removeAllCartProduct } =
    cartProductStore();

  const checkUser = () => {
    if (!user) {
      toast.info("Please Login to add product to cart!");
      return false;
    }
    return true;
  };

  const handleAddCartProduct = ({
    productId,
    toastOn = true,
  }: {
    productId: string;
    toastOn?: boolean;
  }) => {
    const isUser = checkUser();

    if (!isUser) {
      return;
    }

    cartServices
      .addCartProduct(productId)
      .then(({ data }) => {
        addCartProduct(data);

        if (toastOn) {
          toast.success("Product Added to Cart Successfully!");
        }
      })
      .catch((error) => {
        console.error("❌ handleAddCartProduct ~ error:", error.message);
        toast.error("Error while adding product to cart!");
      });
  };

  const handleRemoveCartProduct = ({
    cartProductId,
    removeAll = false,
  }: {
    cartProductId: string;
    removeAll?: boolean;
  }) => {
    const isUser = checkUser();

    if (!isUser) {
      return;
    }

    cartServices
      .deleteCartProduct({ id: cartProductId, removeAll })
      .then(() => {
        if (removeAll) {
          removeAllCartProduct(cartProductId);
        } else {
          removeSingleCartProduct(cartProductId);
        }
      })
      .catch((error) => {
        console.error("❌ handleRemoveCartProduct ~ error:", error.message);
        toast.error("Error while removing product from cart!");
      });
  };

  const handleClearCart = () => {
    const isUser = checkUser();

    if (!isUser) {
      return;
    }

    cartServices
      .clearCart()
      .then(() => {
        toast.success("Cart Cleared Successfully!");
        clearCart();
      })
      .catch((error) => {
        console.error("❌ handleClearCart ~ error:", error.message);
        toast.error("Error while clearing cart!");
      });
  };

  return {
    handleAddCartProduct,
    handleRemoveCartProduct,
    handleClearCart,
  };
};

export default handleCartItems;
