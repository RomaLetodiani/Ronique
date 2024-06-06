import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionWrapperProps = {
  children: ReactNode;
  maxWidth?: string;
};

const SectionWrapper = ({ children, maxWidth = "max-w-7xl" }: SectionWrapperProps) => {
  return <div className={twMerge("px-5 w-full", maxWidth)}>{children}</div>;
};

export default SectionWrapper;
