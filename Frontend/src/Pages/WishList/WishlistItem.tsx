import CoursesCard from "../../Components/Courses/CoursesCard";
import { WishlistProductI } from "../../Types/Wishlist.interface";

const WishlistItem = ({
  wishlistAction,
  product,
}: {
  wishlistAction: () => void;
  product: WishlistProductI;
}) => {
  return (
    <div className="flex-1">
      <div className="max-w-[250px]">
        <CoursesCard
          wishlistAction={() => wishlistAction}
          cartAction={() => {}}
          {...product.likedProduct}
          length={30}
          isInWishlist
        />
      </div>
    </div>
  );
};

export default WishlistItem;
