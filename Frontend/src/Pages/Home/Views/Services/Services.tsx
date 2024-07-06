import SectionWrapper from "../../../../Components/SectionWrapper";
import RenderServicesCards from "./RenderServicesCards";
import RenderServiceTexts from "./RenderServiceTexts";

const Services = () => {
  return (
    <SectionWrapper className="flex text-secondary-500 flex-col md:flex-row gap-10 py-10">
      <RenderServiceTexts />
      <RenderServicesCards />
    </SectionWrapper>
  );
};

export default Services;
