import SliderItem from "./SliderItem";
import { ProductI } from "@/Types/Product.interface";
import { handleCartItems, handlerWishlist, useMediaQuery, useScrollPosition } from "@/Hooks";
import handleSlider from "./handleSlider";
import { LeftRightWhiteGradient, SectionWrapper, SliderArrow } from "@/Components";

const CoursesSlider = ({ products }: { products: ProductI[] }) => {
  const { scrollLeft, scrollRight, sliderRef } = handleSlider();
  const isMobile = useMediaQuery("(max-width: 768px) or (max-height: 800px)");
  const { isAtStartX, isAtEndX } = useScrollPosition(0, sliderRef);
  const { isAtStartX: forWhiteIsAtStartX, isAtEndX: forWhiteIsAtEndX } = useScrollPosition(
    50,
    sliderRef
  );
  const { handleWishlistActions, isInWishlist } = handlerWishlist();
  const { handleAddCartProduct } = handleCartItems();
  return (
    <SectionWrapper className="relative mt-10">
      <LeftRightWhiteGradient disabledLeft={forWhiteIsAtStartX} disabledRight={forWhiteIsAtEndX} />
      {!isMobile && (
        <>
          <SliderArrow onClick={scrollLeft} disabled={isAtStartX} direction="left" />
          <SliderArrow onClick={scrollRight} disabled={isAtEndX} direction="right" />
        </>
      )}
      <div ref={sliderRef} className="overflow-x-auto py-5">
        <div className="grid grid-cols-15 gap-5">
          {products.slice(0, 15).map((product) => (
            <SliderItem
              isInWishlist={isInWishlist(product.id)}
              cartAction={() => handleAddCartProduct({ productId: product.id })}
              wishlistAction={() => handleWishlistActions(product.id)}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CoursesSlider;
