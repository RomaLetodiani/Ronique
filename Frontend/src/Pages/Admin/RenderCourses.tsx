import { useEffect, useState } from "react";
import { ProductI } from "../../Types/Product.interface";
import productServices from "../../Services/ProductServices";
import Course from "./Course";

const RenderCourses = () => {
  const [courses, setCourse] = useState<ProductI[]>([]);

  useEffect(() => {
    productServices.allProducts({ page: 1, pageSize: 1000 }).then(({ data }) => {
      setCourse(data.products);
    });
  }, []);

  return (
    <div className="flex gap-5 flex-wrap">
      {courses.map((course) => (
        <Course key={course.id} setCourse={setCourse} course={course} />
      ))}
    </div>
  );
};

export default RenderCourses;
