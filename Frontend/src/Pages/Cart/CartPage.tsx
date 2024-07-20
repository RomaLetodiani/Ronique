import CartItem from "./CartItem";
import { Button } from "@/Components/UI";
import { cartProductStore } from "@/Stores";
import { handleCartItems, handleCartProductsFetcher, handlerWishlist } from "@/Hooks";
import { SectionWrapper } from "@/Components";

const CartPage = () => {
  const { handleWishlistActions, isInWishlist } = handlerWishlist();
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
