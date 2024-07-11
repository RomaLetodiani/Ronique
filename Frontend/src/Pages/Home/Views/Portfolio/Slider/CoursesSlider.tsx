import LeftRightWhiteGradient from "../../../../../Components/LeftRightWhiteGradient";
import SectionWrapper from "../../../../../Components/SectionWrapper";
import SliderArrow from "../../../../../Components/SliderArrow";
import SliderItem from "./SliderItem";
import useMediaQuery from "../../../../../Hooks/UseMediaQuery";
import handleSlider from "./handleSlider";
import { ProductI } from "../../../../../Types/Product.interface";
import useScrollPosition from "../../../../../Hooks/useScrollPosition";

const CoursesSlider = ({ products }: { products: ProductI[] }) => {
  const { scrollLeft, scrollRight, sliderRef } = handleSlider();
  const isMobile = useMediaQuery("(max-width: 768px) or (max-height: 800px)");
  const { isAtStartX, isAtEndX } = useScrollPosition(0, sliderRef);
  const { isAtStartX: forWhiteIsAtStartX, isAtEndX: forWhiteIsAtEndX } = useScrollPosition(
    50,
    sliderRef
  );
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
            <SliderItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CoursesSlider;
