import { Link } from "react-router-dom";
import filteredStore from "../../../../Stores/Filtered.store";
import { CategoryI } from "../../../../Types/Category.interface";

const RenderCategories = ({ categories }: { categories: CategoryI[] }) => {
  const { setFilterParams } = filteredStore();

  const handleCategoryClick = (category: string) => {
    setFilterParams({ categoryName: category });
  };
  return (
    <div className="overflow-auto py-2 w-full flex gap-5">
      {categories.map((category) => (
        <Link onClick={() => handleCategoryClick(category.name)} to="/courses" key={category.id}>
          <div className="py-1 px-3 rounded-lg border bg-secondary-500/10 border-secondary-200">
            <p className="text-nowrap">{category.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RenderCategories;
