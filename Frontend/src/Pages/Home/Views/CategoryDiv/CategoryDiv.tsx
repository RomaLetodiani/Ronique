import { categoryStore } from "@/Stores";
import RenderCategories from "./RenderCategories";
import { SectionWrapper } from "@/Components";

const CategoryDiv = () => {
  const { categories } = categoryStore();
  return categories.length ? (
    <SectionWrapper className="relative">
      <RenderCategories categories={categories} />
    </SectionWrapper>
  ) : null;
};

export default CategoryDiv;
