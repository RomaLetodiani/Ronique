import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b last:border-b-0">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={twMerge(
          "p-5 cursor-pointer flex gap-5 justify-between",
          "transition-all duration-300 ease-in-out",
          isOpen
            ? "text-blue-500 shadow-[inset_0px_0px_10px_5px_rgba(4,59,92,0.1)] border-b"
            : "text-black"
        )}
      >
        <p>{question}</p>
        <FaAngleDoubleDown
          className={twMerge(
            isOpen && "transform rotate-180",
            "transition-all duration-500 ease-in-out"
          )}
        />
      </div>
      <div
        className={twMerge(
          "px-5 py-5",
          "transition-all duration-200 ease-in-out",
          "shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.1)]",
          !isOpen && "h-0 py-0 overflow-hidden"
        )}
      >
        {answer}
      </div>
    </div>
  );
};

export default Question;
