import { BlurredBg } from "@/Components";
import { twMerge } from "tailwind-merge";
import TextDiv from "./TextDiv";
import HandleCurrentImage from "./HandleCurrentImage";

const Slider = () => {
  const { img } = HandleCurrentImage();
  return (
    <div
      className={twMerge(
        "bg-full h-full bg-no-repeat bg-cover min-h-[500px]",
        "transition-all duration-500 ease-in-out",
        img
      )}
    >
      <BlurredBg />
      <TextDiv />
    </div>
  );
};

export default Slider;
