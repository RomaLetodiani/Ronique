import { twMerge } from "tailwind-merge";
import { ProductI } from "../../Types/Product.interface";
import PriceRender from "../PriceRender";
import { logo } from "../Shared/Assets/Assets";

interface CoursesCardI extends ProductI {
  className?: string;
}

const CoursesCard = ({
  className,
  title,
  description,
  price,
  image,
  salePrice,
  category_name,
}: CoursesCardI) => {
  const renderImage = image.split(",")[1] ? image : logo;

  return (
    <div className={twMerge("border rounded-lg p-5 shadow-lg bg-white", className)}>
      <img src={renderImage} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{category_name}</p>
      <PriceRender price={price} salePrice={salePrice} />
    </div>
  );
};

export default CoursesCard;
