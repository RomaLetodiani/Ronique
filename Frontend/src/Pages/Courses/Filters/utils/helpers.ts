import { twMerge } from "tailwind-merge";

export const getFilterStyles = (isMobile: boolean, open: boolean) => {
  return twMerge(
    "p-5 flex flex-col gap-5 bg-white",
    "transform transition-transform ease-out duration-300",
    isMobile
      ? `absolute -translate-x-full flex-wrap top-0 left-0 w-full z-40 ${open && "translate-x-0"}`
      : "border-r border-secondary-200 w-64 h-full"
  );
};
