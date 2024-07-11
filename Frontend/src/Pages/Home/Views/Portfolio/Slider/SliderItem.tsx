import { Link } from "react-router-dom";
import { ProductI } from "../../../../../Types/Product.interface";
import { renderImage } from "../../../../../Utils/helpers";
import CartWishlistButton from "../../../../../Components/CartWishlistButton/CartWishlistButton";
import { handleActions } from "../../../../../Components/CartWishlistButton/handler";

const SliderItem = ({ product }: { product: ProductI }) => {
  return (
    <div className="text-center h-full flex flex-col justify-between p-3 border border-secondary-500 rounded-xl">
      <Link className="h-full" to={`/courses/${product.id}`}>
        <div className="overflow-hidden rounded-lg">
          <img src={renderImage(product.image)} alt={product.title} />
        </div>
        <h4>{product.title}</h4>
      </Link>
      <div className="flex justify-between gap-3">
        <CartWishlistButton
          onClick={() => handleActions(product.id, "wishlist")}
          path="/"
          isWishlist
        />
        <CartWishlistButton onClick={() => handleActions(product.id, "cart")} path="/" isCart />
      </div>
    </div>
  );
};

export default SliderItem;
