import { InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface inputI extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  errorMessage?: string;
  hasError?: boolean;
}

const Input = ({
  label,
  labelClassName,
  inputClassName,
  wrapperClassName,
  errorMessage,
  hasError,
  ...rest
}: inputI) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className={twMerge("", wrapperClassName)}>
      <label htmlFor={rest.id} className={twMerge("", labelClassName)}>
        {label}
      </label>
      <input {...rest} className={twMerge("", inputClassName)} />
    </div>
  );
};

export default Input;
