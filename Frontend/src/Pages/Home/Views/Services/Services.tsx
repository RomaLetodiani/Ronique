import { SectionWrapper } from "@/Components";
import RenderServicesCards from "./RenderServicesCards";
import RenderServiceTexts from "./RenderServiceTexts";

const Services = () => {
  return (
    <SectionWrapper className="flex flex-col md:flex-row gap-10 py-10">
      <RenderServiceTexts />
      <RenderServicesCards />
    </SectionWrapper>
  );
};

export default Services;
