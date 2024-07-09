import { Link } from "react-router-dom";
import { ProductI } from "../../../../../Types/Product.interface";
import { renderImage } from "../../../../../Utils/helpers";

const SliderItem = ({ product }: { product: ProductI }) => {
  return (
    <Link to={`/courses/${product.id}`}>
      <div className="text-center h-full flex flex-col justify-between p-3 border border-secondary-500 rounded-xl">
        <div className="overflow-hidden rounded-lg">
          <img src={renderImage(product.image)} alt={product.title} />
        </div>
        <h4>{product.title}</h4>
      </div>
    </Link>
  );
};

export default SliderItem;
