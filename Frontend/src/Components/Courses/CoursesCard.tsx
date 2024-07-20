import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { ProductI } from "@/Types/Product.interface";
import { renderImage, sliceText } from "../../Utils/helpers";
import CartWishlistButton from "@/Components/CartWishlistButton/CartWishlistButton";
import PriceRender from "@/Components/PriceRender";

interface CoursesCardI extends ProductI {
  isInWishlist: boolean;
  className?: string;
  length?: number;
  wishlistAction: () => void;
  cartAction: () => void;
}

const CoursesCard = ({
  className,
  id,
  title,
  description,
  price,
  image,
  salePrice,
  category_name,
  length = 80,
  wishlistAction,
  cartAction,
  isInWishlist,
}: CoursesCardI) => {
  return (
    <div
      className={twMerge(
        "border overflow-hidden border-secondary-500 rounded-xl shadow-lg bg-white",
        "flex flex-col justify-between",
        className
      )}
    >
      <Link to={`/courses/${id}`}>
        <div className="overflow-hidden border shadow-md border-secondary-500 rounded-xl ">
          <img className="w-full h-full" src={renderImage(image)} alt={title} />
        </div>
        <div className="p-5">
          <div className="flex gap-10 justify-between w-full">
            <h4 className="font-bold text-xl">{title}</h4>
            <PriceRender price={price} salePrice={salePrice} />
          </div>
          <p>{category_name}</p>
          <p>{sliceText(description, length)}</p>
        </div>
      </Link>
      <div className="flex justify-between gap-3 p-3 pt-0">
        <CartWishlistButton onClick={wishlistAction} isWishlist isInWishlist={isInWishlist} />
        <CartWishlistButton isCart onClick={cartAction} />
      </div>
    </div>
  );
};

export default CoursesCard;
