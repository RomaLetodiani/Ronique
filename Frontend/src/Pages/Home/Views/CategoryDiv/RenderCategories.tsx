import { Link } from "react-router-dom";
import filteredStore from "../../../../Stores/Filtered.store";
import { CategoryI } from "../../../../Types/Category.interface";
import LeftRightWhiteGradient from "../../../../Components/LeftRightWhiteGradient";
import { useRef } from "react";
import useScrollPosition from "../../../../Hooks/useScrollPosition";

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
          <Link onClick={() => handleCategoryClick(category.name)} to="/courses" key={category.id}>
            <div className="py-1 px-3 rounded-lg border bg-secondary-500/10 border-secondary-200">
              <p className="text-nowrap">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RenderCategories;
