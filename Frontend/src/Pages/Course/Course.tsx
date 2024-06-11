import { useParams } from "react-router";

const Course = () => {
  const { id } = useParams<{ id: string }>();
  console.log("🚀 ~ Course ~ id:", id);
  return <div>Course</div>;
};

export default Course;
