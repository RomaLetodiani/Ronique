import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  title: string;
  description: string;
  icon?: string;
  iconComponent?: ReactNode;
  href?: string;
  className?: string;
  direction?: "flex-row" | "flex-col" | "flex-row-reverse" | "flex-col-reverse";
  align?:
    | "items-center"
    | "items-start"
    | "items-end"
    | "items-stretch"
    | "items-center"
    | "items-baseline";
};

const Card = ({
  title,
  description,
  icon,
  iconComponent,
  href = "",
  className,
  direction = "flex-row",
  align = "items-start",
}: CardProps) => {
  return (
    <Link to={href}>
      <div
        className={twMerge(
          "h-full p-5",
          "flex gap-5 lg:items-start",
          "border rounded-xl shadow-md",
          direction,
          align,
          className
        )}
      >
        {icon ? (
          <div className="w-10">
            <img src={icon} alt={title} />
          </div>
        ) : (
          iconComponent
        )}
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
