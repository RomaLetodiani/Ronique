import SectionWrapper from "../../../../Components/SectionWrapper";
import LeftRightWhiteGradient from "../../../../Components/LeftRightWhiteGradient";
import RenderCategories from "./RenderCategories";

const CategoryDiv = () => {
  return (
    <SectionWrapper className="relative">
      <LeftRightWhiteGradient />
      <RenderCategories />
    </SectionWrapper>
  );
};

export default CategoryDiv;
