import { useEffect, useState } from "react";
import { ProductI } from "../../Types/Product.interface";
import productServices from "../../Services/ProductServices";
import Course from "./Course";

const RenderCourses = ({
  selectedKeys,
  setSelectedKeys,
}: {
  selectedKeys: string[];
  setSelectedKeys: (keys: string[]) => void;
}) => {
  const [courses, setCourse] = useState<ProductI[]>([]);

  useEffect(() => {
    productServices.allProducts({ page: 1, pageSize: 1000 }).then(({ data }) => {
      setCourse(data.products);
    });
  }, []);

  return (
    <div className="flex gap-5 p-5 overflow-y-auto flex-wrap">
      {courses.map((course) => (
        <Course
          key={course.id}
          setCourse={setCourse}
          course={course}
          handleSelect={(id) => {
            if (selectedKeys.includes(id)) {
              setSelectedKeys(selectedKeys.filter((key) => key !== id));
            } else {
              setSelectedKeys([...selectedKeys, id]);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RenderCourses;
