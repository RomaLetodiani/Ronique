import { CategoryI } from "../../../../Types/Category.interface";
import LeftRightWhiteGradient from "../../../../Components/LeftRightWhiteGradient";
import { useRef } from "react";
import { filteredStore } from "../../../../Stores";
import { useScrollPosition } from "../../../../Hooks";
import CategoryElement from "./CategoryElement";

const RenderCategories = ({ categories }: { categories: CategoryI[] }) => {
  const { setFilterParams } = filteredStore();

  const handleCategoryClick = (category: string) => {
    setFilterParams({ categoryName: category });
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { isAtStartX, isAtEndX } = useScrollPosition(50, containerRef);
  return (
    <>
      <LeftRightWhiteGradient disabledLeft={isAtStartX} disabledRight={isAtEndX} />
      <div ref={containerRef} className="overflow-auto py-2 w-full flex gap-5">
        {categories.map((category) => (
          <CategoryElement
            key={category.id}
            categoryName={category.name}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>
    </>
  );
};

export default RenderCategories;
