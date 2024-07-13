import { useState } from "react";
import SectionWrapper from "../../Components/SectionWrapper";
import useMediaQuery from "../../Hooks/UseMediaQuery";
import Filters from "./Filters/Filters";
import RenderCourses from "./RenderCourses";

const Courses = () => {
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const [open, setOpen] = useState(false);
  return (
    <SectionWrapper className="grid grid-cols-[auto_1fr] min-h-screen relative overflow-hidden">
      <Filters isMobile={!isNotMobile} open={open} setOpen={setOpen} />
      <RenderCourses isMobile={!isNotMobile} />
    </SectionWrapper>
  );
};

export default Courses;
