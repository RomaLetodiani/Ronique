import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { Button } from "./UI";

type Props = {
  isCart?: boolean;
  isWishlist?: boolean;
  isInWishlist?: boolean;
  path?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const CartWishlistButton = ({ isCart, isWishlist, isInWishlist, path = "", onClick }: Props) => {
  return (
    <Link to={path}>
      <Button
        className="text-white flex justify-center items-center w-10 h-10 rounded-full"
        onClick={onClick}
      >
        <span>
          {isWishlist && <FaHeart className={twMerge(isInWishlist && "text-danger")} />}
          {isCart && <FaShoppingCart />}
        </span>
      </Button>
    </Link>
  );
};

export default CartWishlistButton;
