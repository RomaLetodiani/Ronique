import { twMerge } from "tailwind-merge";

type Props = {
  isMobile: boolean;
  open: boolean;
  zIndex: 60 | 50 | 30;
  absOrFixed?: "absolute" | "fixed";
};

// @ts-expect-error tailwindClasses is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tailwindClasses = ["z-[60]", "z-[50]", "z-[30]"];

const BlurBackground = ({ isMobile, open, zIndex, absOrFixed }: Props) => {
  return (
    isMobile && (
      <div
        className={twMerge(
          "w-full h-full inset-0 bg-black/20 backdrop-blur-sm transition-transform ease-in-out duration-700",
          open ? "translate-y-0" : "-translate-y-full",
          `z-[${zIndex}]`,
          absOrFixed
        )}
      ></div>
    )
  );
};

export default BlurBackground;
