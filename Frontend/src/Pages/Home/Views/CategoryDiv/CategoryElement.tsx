import { Link } from "react-router-dom";

type CategoryElementProps = {
  categoryName: string;
  onClick: () => void;
};

const CategoryElement = ({ categoryName, onClick }: CategoryElementProps) => {
  return (
    <Link onClick={onClick} to="/courses">
      <div className="py-1 px-3 rounded-lg border bg-secondary-500/10 border-secondary-200">
        <p className="text-nowrap">{categoryName}</p>
      </div>
    </Link>
  );
};

export default CategoryElement;
