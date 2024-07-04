import SectionWrapper from "../../../../Components/SectionWrapper";
import Slider from "./Slider";

const Hero = () => {
  return (
    <SectionWrapper
      maxWidth="max-w-[1440px]"
      className="relative px-0 overflow-hidden min-[1441px]:rounded-b-3xl"
    >
      <Slider />
    </SectionWrapper>
  );
};

export default Hero;
