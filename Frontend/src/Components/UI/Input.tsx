import { InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface inputI extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  errorMessage?: string;
  hasError?: boolean;
  focus?: boolean;
}

const Input = ({
  label,
  labelClassName,
  inputClassName,
  wrapperClassName,
  errorMessage,
  hasError,
  focus,
  ...rest
}: inputI) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className={twMerge("relative w-full flex flex-col", wrapperClassName)}>
      <label htmlFor={rest.id} className={twMerge("", labelClassName)}>
        {label}
      </label>
      <input
        {...rest}
        className={twMerge(
          "w-full border outline-none px-5 py-3 rounded-2xl",
          `${hasError && "border-red-500"}`,
          inputClassName
        )}
      />
    </div>
  );
};

export default Input;
