import { Link } from "react-router-dom";
import categoryStore from "../../../../Stores/Category.store";
import filteredStore from "../../../../Stores/Filtered.store";

const RenderCategories = () => {
  const { categories } = categoryStore();
  const { setFilterParams } = filteredStore();

  const handleCategoryClick = (category: string) => {
    setFilterParams({ categoryName: category });
  };
  return (
    <div className="overflow-auto py-2 w-full flex gap-5">
      {categories.map((category) => (
        <Link onClick={() => handleCategoryClick(category.name)} to="/courses" key={category.id}>
          <div className="py-1 px-3 rounded-lg bg-black/10">
            <p className="text-nowrap">{category.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RenderCategories;
