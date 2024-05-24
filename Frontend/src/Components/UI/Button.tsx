import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: ButtonI) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "rounded-lg cursor-pointer px-5 py-2 shadow-lg hover:opacity-70",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
