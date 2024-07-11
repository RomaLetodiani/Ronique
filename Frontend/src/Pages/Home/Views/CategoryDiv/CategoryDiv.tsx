import SectionWrapper from "../../../../Components/SectionWrapper";
import RenderCategories from "./RenderCategories";
import categoryStore from "../../../../Stores/Category.store";

const CategoryDiv = () => {
  const { categories } = categoryStore();
  return categories.length ? (
    <SectionWrapper className="relative">
      <RenderCategories categories={categories} />
    </SectionWrapper>
  ) : null;
};

export default CategoryDiv;
