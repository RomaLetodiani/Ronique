import { Link } from "react-router-dom";
import { ProductI } from "@/Types/Product.interface";
import { renderImage } from "@/Utils/helpers";

const Option = (course: ProductI) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <div className="flex gap-5 p-5 border shadow-sm">
        <div className="w-14 h-14">
          <img className="w-full h-full" src={renderImage(course.image)} alt={course.title} />
        </div>
        <div>
          <h5>{course.title}</h5>
          <p>{course.price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default Option;
