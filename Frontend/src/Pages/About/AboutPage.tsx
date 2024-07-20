import { SectionWrapper } from "@/Components";
import Achievements from "./Views/Achievements";
import BottomFooter from "./Views/BottomFooter";
import Goals from "./Views/Goals";

const AboutPage = () => {
  return (
    <SectionWrapper maxWidth="max-w-[1440px] text-center lg:text-left">
      <div className="flex flex-col gap-5 p-8">
        <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-40">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="lg:max-w-[400px]">
            At the heart of our mission is the belief that together, we can create a brighter
            future. We are dedicated to driving innovation, fostering education, and empowering
            communities to achieve their full potential. Our team works tirelessly to turn
            challenges into opportunities and to make a positive impact on the world. Join us in our
            journey to make a difference, one step at a time.
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
