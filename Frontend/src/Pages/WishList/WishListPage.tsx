import { Link } from "react-router-dom";
import SectionWrapper from "../../Components/SectionWrapper";
import Button from "../../Components/UI/Button";
import { wishListHandler } from "../../Hooks/handlerWishlist";
import wishlistProductStore from "../../Stores/Wishlist.store";
import WishlistItem from "./WishlistItem";
import handleCartItems from "../../Hooks/handleCartItems";

const WishListPage = () => {
  const { wishlistProducts, loadingWishlistProducts } = wishlistProductStore();
  const { handleWishlistActions } = wishListHandler();
  const { handleAddCartProduct } = handleCartItems();
  return (
    <SectionWrapper className="pb-10">
      <h2 className="text-center my-10 font-bold text-primary text-xl">
        Products You Would Like to Purchase
      </h2>
      {loadingWishlistProducts ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-5">
          {wishlistProducts.length ? (
            wishlistProducts.map((product) => (
              <WishlistItem
                cartAction={() => handleAddCartProduct({ productId: product.product_id })}
                wishlistAction={() => handleWishlistActions(product.product_id)}
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="flex w-full gap-5 flex-col justify-center items-center">
              <h3 className="text-center text-gray-400 text-lg">No products in your wishlist</h3>
              <Link to={"/courses"}>
                <Button btnType="secondary">Continue Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </SectionWrapper>
  );
};

export default WishListPage;
