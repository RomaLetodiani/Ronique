import CartWishlistButton from "@/Components/CartWishlistButton/CartWishlistButton";
import { Button } from "@/Components/UI";
import { handleCartItems, handlerWishlist } from "@/Hooks";
import { useLocation } from "react-router";

interface ActionsProps {
  productId: string;
}

const Actions = ({ productId }: ActionsProps) => {
  const { pathname } = useLocation();
  const { handleWishlistActions, isInWishlist } = handlerWishlist();
  const { handleAddCartProduct } = handleCartItems();

  return (
    <div className="self-end flex gap-3">
      <CartWishlistButton
        onClick={() => handleWishlistActions(productId)}
        isInWishlist={isInWishlist(productId)}
        path={pathname}
        isWishlist
      />
      <CartWishlistButton
        onClick={() => handleAddCartProduct({ productId })}
        path={pathname}
        isCart
      />
      <Button>Buy</Button>
    </div>
  );
};

export default Actions;
