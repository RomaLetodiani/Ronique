import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import Mentor from "./Mentor";
import { useMediaQuery } from "@/Hooks";
import { SectionWrapper } from "@/Components";
import { mentorsArray } from "@/Utils/Data";

const Mentors = () => {
  const [mentorIndex, setMentorIndex] = useState(0);
  const isNotMobile = useMediaQuery("(min-width: 500px)");
  useEffect(() => {
    const interval = setInterval(() => {
      setMentorIndex((prevIndex) => {
        if (prevIndex === mentorsArray.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [mentorIndex]);

  const handleMentorChange = (index: number) => {
    setMentorIndex(index);
  };

  return (
    <SectionWrapper className="my-10 flex flex-col items-center">
      <h3 className="text-3xl font-bold">Who Are Our Mentors</h3>

      <Mentor {...mentorsArray[mentorIndex]} />

      <div className="flex gap-5">
        {mentorsArray.slice(0, isNotMobile ? 20 : 10).map((_, index) => (
          <div
            key={index}
            className={twMerge(
              mentorIndex === index ? "bg-primary" : "bg-secondary-500",
              "h-2 w-2 rounded-full cursor-pointer"
            )}
            onClick={() => handleMentorChange(index)}
          ></div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Mentors;
