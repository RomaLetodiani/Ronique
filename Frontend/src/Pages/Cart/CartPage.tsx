import SectionWrapper from "../../Components/SectionWrapper";
import Button from "../../Components/UI/Button";
import handleCartItems from "../../Hooks/handleCartItems";
import handleCartProductsFetcher from "../../Hooks/handleCartProductsFetcher";
import { wishListHandler } from "../../Hooks/handlerWishlist";
import cartProductStore from "../../Stores/Cart.store";
import CartItem from "./CartItem";

const CartPage = () => {
  const { handleWishlistActions, isInWishlist } = wishListHandler();
  const { handleClearCart, handleRemoveCartProduct, handleAddCartProduct } = handleCartItems();
  const { CartProducts, loadingCartProducts } = cartProductStore();
  handleCartProductsFetcher();

  if (loadingCartProducts) {
    return <h1>Loading...</h1>;
  }

  if (!CartProducts.length) {
    return <h1>Cart is Empty</h1>;
  }

  return (
    <SectionWrapper className="py-5">
      <Button className="mb-5" onClick={handleClearCart}>
        Clear Cart
      </Button>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        {CartProducts.map((p) => (
          <CartItem
            key={p.id}
            cartItem={p}
            isInWishlist={isInWishlist(p.product_id)}
            handleAddCartProduct={() =>
              handleAddCartProduct({ productId: p.product_id, toastOn: false })
            }
            handleRemoveCartProduct={() => handleRemoveCartProduct({ cartProductId: p.id })}
            handleRemoveAllCartProduct={() =>
              handleRemoveCartProduct({ cartProductId: p.id, removeAll: true })
            }
            handleWishlistAction={() => handleWishlistActions(p.product_id)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CartPage;
