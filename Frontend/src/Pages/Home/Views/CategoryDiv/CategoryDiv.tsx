import SectionWrapper from "../../../../Components/SectionWrapper";
import { categoryStore } from "../../../../Stores";
import RenderCategories from "./RenderCategories";

const CategoryDiv = () => {
  const { categories } = categoryStore();
  return categories.length ? (
    <SectionWrapper className="relative">
      <RenderCategories categories={categories} />
    </SectionWrapper>
  ) : null;
};

export default CategoryDiv;
