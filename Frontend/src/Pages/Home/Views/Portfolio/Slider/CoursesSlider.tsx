import LeftRightWhiteGradient from "../../../../../Components/LeftRightWhiteGradient";
import SectionWrapper from "../../../../../Components/SectionWrapper";
import SliderArrow from "../../../../../Components/SliderArrow";
import SliderItem from "./SliderItem";
import useMediaQuery from "../../../../../Hooks/UseMediaQuery";
import handleSlider from "./handleSlider";
import { ProductI } from "../../../../../Types/Product.interface";

const CoursesSlider = ({ products }: { products: ProductI[] }) => {
  const { scrollLeft, scrollRight, sliderRef } = handleSlider();
  const isMobile = useMediaQuery("(max-width: 768px) or (max-height: 800px)");

  return (
    <SectionWrapper className="relative mt-10">
      <LeftRightWhiteGradient />
      {!isMobile && (
        <>
          <SliderArrow onClick={scrollLeft} disabled={false} direction="left" />
          <SliderArrow onClick={scrollRight} disabled={false} direction="right" />
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
