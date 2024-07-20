import CategoryElement from "@/Pages/Home/Views/CategoryDiv/CategoryElement";
import { filteredStore } from "@/Stores";

type Props = {
  category_name: string;
};

const Category = ({ category_name }: Props) => {
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
