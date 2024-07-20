import { twMerge } from "tailwind-merge";
import { categoryStore } from "../../../../Stores";

type CategoryFilterProps = {
  handleCategoryChange: (category: string) => void;
  categoryName?: string;
};

const CategoryFilter = ({ handleCategoryChange, categoryName }: CategoryFilterProps) => {
  const { categories } = categoryStore();

  const renderCategories = [{ id: "all", name: "All" }, ...categories];

  return (
    <div>
      <p className="font-semibold text-lg">Category</p>
      <ul className="flex flex-col">
        {renderCategories.map((category) => (
          <li
            className={twMerge(
              "cursor-pointer",
              (category.name === categoryName || (category.name === "All" && !categoryName)) &&
                "text-secondary-500"
            )}
            onClick={() => handleCategoryChange(category.name)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
