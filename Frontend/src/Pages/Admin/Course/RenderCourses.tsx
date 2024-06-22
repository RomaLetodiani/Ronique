import Course from "./Course";
import globalStore from "../../../Stores/Global.store";

const RenderCourses = ({
  selectedKeys,
  setSelectedKeys,
}: {
  selectedKeys: string[];
  setSelectedKeys: (keys: string[]) => void;
}) => {
  const { products: courses } = globalStore();

  const handleSelect = (id: string) => {
    if (selectedKeys.includes(id)) {
      setSelectedKeys(selectedKeys.filter((key) => key !== id));
    } else {
      setSelectedKeys([...selectedKeys, id]);
    }
  };
  return (
    <div className="grid justify-items-center grid-cols-1 min-[950px]:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  gap-5 p-5 ">
      {courses.map((course) => (
        <Course key={course.id} course={course} handleSelect={handleSelect} />
      ))}
    </div>
  );
};

export default RenderCourses;
