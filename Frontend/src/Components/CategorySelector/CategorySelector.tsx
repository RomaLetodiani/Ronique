import { Dispatch, SetStateAction, useRef, useState } from "react";
import useClickInside from "../../Hooks/useClickInside";
import useClickOutside from "../../Hooks/useClickOutside";
import Options from "./Options";
import { CategoryI } from "../../Types/Category.interface";

type SelectorProps = {
  options: CategoryI[];
  selected?: CategoryI;
  setSelected: Dispatch<SetStateAction<CategoryI | undefined>>;
};

const CategorySelector = ({ options, selected, setSelected }: SelectorProps) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setVisible(false);
  };

  const handleClickInside = () => {
    setVisible(true);
  };

  const handleSelect = (option: CategoryI) => {
    setSelected(option);
    setVisible(false);
  };

  useClickInside(containerRef, handleClickInside);
  useClickOutside(containerRef, handleClickOutside);
  return (
    <div ref={containerRef} className="relative">
      <div className="w-full border outline-none px-3 py-6 rounded-xl relative">
        <p className="absolute left-3 top-1/2 -translate-y-1/2">{selected?.name}</p>
      </div>
      {visible && <Options options={options} setValue={handleSelect} selected={selected} />}
    </div>
  );
};

export default CategorySelector;
