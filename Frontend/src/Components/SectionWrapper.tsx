import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionWrapperProps = {
  children: ReactNode;
  maxWidth?: string;
  className?: string;
};

const SectionWrapper = ({ children, maxWidth = "max-w-7xl", className }: SectionWrapperProps) => {
  return <div className={twMerge("px-5 w-full", maxWidth, className)}>{children}</div>;
};

export default SectionWrapper;
