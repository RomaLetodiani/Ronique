import { twMerge } from "tailwind-merge";
import { ProductI } from "../../Types/Product.interface";
import PriceRender from "../PriceRender";
import { renderImage, sliceText } from "../../Utils/helpers";
import { Link } from "react-router-dom";
import CartWishlistButton from "../CartWishlistButton/CartWishlistButton";
import { handleActions } from "../CartWishlistButton/handler";

interface CoursesCardI extends ProductI {
  className?: string;
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
}: CoursesCardI) => {
  return (
    <div
      className={twMerge(
        "border overflow-hidden border-secondary-500 rounded-xl shadow-lg bg-white",
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
          <p>{sliceText(description, 80)}</p>
        </div>
      </Link>
      <div className="flex justify-between gap-3 p-3 pt-0">
        <CartWishlistButton onClick={() => handleActions(id, "wishlist")} path="/" isWishlist />
        <CartWishlistButton onClick={() => handleActions(id, "cart")} path="/" isCart />
      </div>
    </div>
  );
};

export default CoursesCard;
