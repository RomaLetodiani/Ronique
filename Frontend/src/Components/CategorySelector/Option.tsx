import { twMerge } from "tailwind-merge";
import { CategoryI } from "../../Types/Category.interface";

type OptionProps = {
  isSelected: boolean;
  value: CategoryI;

  setValue: (value: CategoryI) => void;
};

const Option = ({ value, setValue, isSelected }: OptionProps) => {
  return (
    <div
      className={twMerge(
        "py-1 px-3 rounded-lg cursor-pointer",
        isSelected ? "bg-gray-200" : "hover:bg-gray-100"
      )}
      onClick={() => setValue(value)}
    >
      {value.name}
    </div>
  );
};

export default Option;
