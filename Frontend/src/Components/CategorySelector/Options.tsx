import { CategoryI } from "../../Types/Category.interface";
import Option from "./Option";

type Props = {
  selected?: CategoryI;
  setValue: (value: CategoryI) => void;
  options: CategoryI[];
};

const Options = ({ selected, setValue, options }: Props) => {
  return (
    <div className="bg-white shadow-md border p-2 absolute w-full z-50 rounded-b-xl">
      {options.map((option, index) => (
        <Option isSelected={selected === option} key={index} value={option} setValue={setValue} />
      ))}
    </div>
  );
};

export default Options;
