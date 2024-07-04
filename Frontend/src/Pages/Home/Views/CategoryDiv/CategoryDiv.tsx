import { Link } from "react-router-dom";
import categoryStore from "../../../../Stores/Category.store";
import filteredStore from "../../../../Stores/Filtered.store";

const CategoryDiv = () => {
  const { categories } = categoryStore();
  const { setFilterParams } = filteredStore();

  const handleCategoryClick = (category: string) => {
    setFilterParams({ categoryName: category });
  };
  return (
    <div className="px-5 py-2 flex gap-5 overflow-auto w-full">
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

export default CategoryDiv;
