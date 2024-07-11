import SectionWrapper from "../../Components/SectionWrapper";
import { wishListHandler } from "../../Hooks/handlerWishlist";
import wishlistProductStore from "../../Stores/Wishlist.store";
import WishlistItem from "./WishlistItem";

const WishListPage = () => {
  const { wishlistProducts, loadingWishlistProducts } = wishlistProductStore();
  const { handleWishlistActions } = wishListHandler();
  return (
    <SectionWrapper className="pb-10">
      <h2 className="text-center my-10 font-bold text-primary text-xl">
        Products You Would Like to Purchase
      </h2>
      {loadingWishlistProducts ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-5">
          {wishlistProducts.map((product) => (
            <WishlistItem
              wishlistAction={() => handleWishlistActions(product.likedProduct.id)}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

export default WishListPage;
