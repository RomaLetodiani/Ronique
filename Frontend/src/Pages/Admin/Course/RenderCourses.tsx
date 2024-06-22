import Course from "./Course";
import globalStore from "../../../Stores/Global.store";
import CheckBox from "../../../Components/UI/CheckBox";

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

  const handleSelectAll = () => {
    if (selectedKeys.length === courses.length) {
      setSelectedKeys([]);
    } else {
      setSelectedKeys(courses.map((course) => course.id));
    }
  };
  return (
    <div>
      <CheckBox
        id="selectAllProducts"
        checked={selectedKeys.length === courses.length}
        onChange={handleSelectAll}
        uncheckedText="Select All"
        checkedText="Deselect All"
        withText
      />
      <div className="grid justify-items-center grid-cols-1 min-[950px]:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  gap-5 p-5 ">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleSelect={handleSelect}
            selectedP={selectedKeys.includes(course.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderCourses;
