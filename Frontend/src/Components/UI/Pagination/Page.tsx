import { twMerge } from "tailwind-merge";

type PageProps = {
  page: number | string;
  currentPage: number;
  isFirstRange: boolean;
  isLastRange: boolean;
  isInRange: boolean;
  onClick: () => void;
};

const Page = ({ page, currentPage, isFirstRange, isLastRange, isInRange, onClick }: PageProps) => {
  const isCurrent = currentPage === page;
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "rounded-full border p-2 w-8 h-8 flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary/20 hover:border-secondary-200",
        isCurrent && "bg-primary/20 border-secondary-500",
        !isInRange && !(isLastRange || isFirstRange) && "hidden"
      )}
    >
      {page}
    </div>
  );
};

export default Page;
