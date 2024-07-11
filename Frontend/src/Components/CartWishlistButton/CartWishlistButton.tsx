import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { MouseEvent } from "react";

type Props = {
  isCart?: boolean;
  isWishlist?: boolean;
  path: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const CartWishlistButton = ({ isCart, isWishlist, path, onClick }: Props) => {
  return (
    <Link to={path}>
      <Button
        className="text-white flex justify-center items-center w-10 h-10 rounded-full"
        onClick={onClick}
      >
        <span>
          {isWishlist && <FaHeart />}
          {isCart && <FaShoppingCart />}
        </span>
      </Button>
    </Link>
  );
};

export default CartWishlistButton;
