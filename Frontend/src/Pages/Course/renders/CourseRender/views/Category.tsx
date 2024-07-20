import { CategoryElement } from "@/Components";
import { filteredStore } from "@/Stores";

type CategoryProps = {
  category_name: string;
};

const Category = ({ category_name }: CategoryProps) => {
  const { setFilterParams } = filteredStore();

  const handleCategoryClick = () => {
    setFilterParams({ categoryName: category_name });
  };
  return (
    <div className="flex">
      <CategoryElement onClick={handleCategoryClick} categoryName={category_name} />
    </div>
  );
};

export default Category;
