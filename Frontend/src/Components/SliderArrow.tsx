import { twMerge } from "tailwind-merge";

type Props = {
  direction: "right" | "left";
  onClick: () => void;
  disabled: boolean;
};

const SliderArrow = ({ direction, onClick, disabled }: Props) => {
  const isLeft = direction === "left";
  return (
    <div
      className={twMerge(
        "absolute z-50 w-10 h-full cursor-pointer",
        "flex items-center justify-center",
        isLeft ? "left-3" : "right-3"
      )}
      onClick={disabled ? () => {} : onClick}
    >
      <span
        className={twMerge(
          "px-2 py-10 text-xl border rounded-full",
          "flex justify-center items-center",
          "transition-all duration-300 ease-in-out",
          "bg-secondary-200 hover:bg-secondary-500",
          "hover:text-primary",
          disabled && "opacity-50 cursor-not-allowed",
          isLeft && "transform rotate-180"
        )}
      >
        &gt;
      </span>
    </div>
  );
};

export default SliderArrow;
