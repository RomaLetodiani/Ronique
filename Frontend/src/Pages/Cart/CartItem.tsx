import { Link } from "react-router-dom";
import { Button } from "@/Components/UI";
import { twMerge } from "tailwind-merge";
import { renderImage } from "@/Utils/helpers";
import { CartProductI } from "@/Types/Cart.interface";
import { MdDeleteForever } from "react-icons/md";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { PriceRender } from "@/Components";

type CartItemProps = {
  cartItem: CartProductI;
  isInWishlist: boolean;
  handleAddCartProduct: () => void;
  handleRemoveCartProduct: () => void;
  handleRemoveAllCartProduct: () => void;
  handleWishlistAction: () => void;
};

const buttonClassNames = "h-full px-2 py-1 flex justify-center items-center";

const CartItem = ({
  cartItem,
  isInWishlist,
  handleAddCartProduct,
  handleRemoveCartProduct,
  handleRemoveAllCartProduct,
  handleWishlistAction,
}: CartItemProps) => {
  const { cartProduct, count } = cartItem;
  const { price, salePrice } = cartProduct;
  const total = (salePrice ? salePrice : price) * count;

  return (
    <div className="group flex flex-col sm:flex-row border rounded-2xl overflow-hidden">
      <Link className="h-full w-full sm:max-w-72  relative" to={`/courses/${cartProduct.id}`}>
        <div
          className={twMerge(
            "bg-primary/50 text-white px-2 py-1",
            "opacity-0 group-hover:opacity-100",
            "absolute inset-0",
            "transition-all duration-300 ease-in-out",
            "flex justify-center items-center"
          )}
        >
          <p className="px-3 py-2 bg-primary rounded-lg border">See In Details</p>
        </div>
        <img src={renderImage(cartProduct.image)} alt={cartProduct.title} />
      </Link>
      <div className="p-5 flex flex-col gap-3 w-full">
        <div className="flex justify-between gap-5 items-center">
          <h3 className="font-semibold text-lg">{cartProduct.title}</h3>
          <PriceRender price={price} salePrice={salePrice} />
        </div>
        <div>
          <p>
            <strong>Quantity:</strong> {count}
          </p>
          <p>
            <strong>Total:</strong> {total} $
          </p>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="w-32 grid grid-cols-3">
            <Button
              onClick={handleAddCartProduct}
              className={twMerge(buttonClassNames, "rounded-e-none")}
            >
              <span>
                <FaPlus />
              </span>
            </Button>
            <Button
              className={twMerge(buttonClassNames, "rounded-none border-x-2 pointer-events-none")}
            >
              <span>{count}</span>
            </Button>
            <Button
              onClick={handleRemoveCartProduct}
              className={twMerge(buttonClassNames, "rounded-s-none")}
            >
              <span>
                <FaMinus />
              </span>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleWishlistAction}
              className="flex items-center justify-center py-1 px-2"
            >
              <span>
                <FaHeart className={twMerge(isInWishlist && "text-danger")} />
              </span>
            </Button>
            <Button
              btnType="danger"
              onClick={handleRemoveAllCartProduct}
              className="flex items-center justify-center py-1 px-2 text-2xl"
            >
              <span>
                <MdDeleteForever />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
