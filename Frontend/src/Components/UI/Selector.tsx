import { SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: OptionsProps[];
  setSelected: (value: string | number) => void;
  selected: string | number;
  label?: string;
  labelClassName?: string;
  defaultOption?: string;
};

type OptionsProps = {
  value: string | number;
  title: string;
  disabled?: boolean;
};

const Selector = ({
  options,
  setSelected,
  selected,
  label,
  labelClassName,
  defaultOption,
  ...props
}: Props) => {
  return (
    <div className="w-full relative">
      <label
        htmlFor={props.id}
        className={twMerge(
          "absolute top-1 text-sm text-primary left-4 pointer-events-none transition-all",
          labelClassName
        )}
      >
        {label}
      </label>
      <select
        {...props}
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
        className={twMerge(
          "w-full border outline-none px-3 py-2 rounded-xl",
          label && selected && "pt-6"
        )}
      >
        {defaultOption && (
          <option value="" disabled>
            {defaultOption}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
