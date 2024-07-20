import { handleSingleCourse } from "@/Hooks";
import { CourseRender, Error, Loading } from "./renders";

const Course = () => {
  const { course, courseFetchError, courseFetchLoading } = handleSingleCourse();

  if (courseFetchLoading) {
    return <Loading />;
  }

  if (courseFetchError || !course) {
    return <Error />;
  }

  return <CourseRender course={course} />;
};

export default Course;
