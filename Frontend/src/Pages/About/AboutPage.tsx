import SectionWrapper from "../../Components/SectionWrapper";
import Achievements from "./Views/Achievements";
import BottomFooter from "./Views/BottomFooter";
import Goals from "./Views/Goals";

const AboutPage = () => {
  return (
    <SectionWrapper maxWidth="max-w-[1440px]">
      <div className="flex flex-col gap-5 p-8">
        <div className="flex justify-between flex-col md:flex-row md:gap-40">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ut quod dignissimos
            voluptatum odio ducimus id consequatur sint, illum commodi corporis iure suscipit enim
            repellendus distinctio nostrum, non quidem quisquam.
          </p>
        </div>
        <Achievements />
        <Goals />
        <BottomFooter />
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;
