import { useParams } from "react-router";

const Course = () => {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
};

export default Course;
