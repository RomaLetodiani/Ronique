import handleSingleCourse from "./hooks/handleSingleCourse";
import CourseRender from "./renders/CourseRender/CourseRender";
import Error from "./renders/Error";
import Loading from "./renders/Loading";

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
