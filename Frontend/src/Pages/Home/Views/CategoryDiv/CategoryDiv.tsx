import SectionWrapper from "../../../../Components/SectionWrapper";
import LeftRightWhiteGradient from "../../../../Components/LeftRightWhiteGradient";
import RenderCategories from "./RenderCategories";
import categoryStore from "../../../../Stores/Category.store";

const CategoryDiv = () => {
  const { categories } = categoryStore();
  return categories.length ? (
    <SectionWrapper className="relative">
      <LeftRightWhiteGradient />
      <RenderCategories categories={categories} />
    </SectionWrapper>
  ) : null;
};

export default CategoryDiv;
