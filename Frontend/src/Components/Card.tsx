import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  title: string;
  description: string;
  icon: string;
  href?: string;
  className?: string;
  direction: "flex-row" | "flex-col" | "flex-row-reverse" | "flex-col-reverse";
  align:
    | "items-center"
    | "items-start"
    | "items-end"
    | "items-stretch"
    | "items-center"
    | "items-baseline";
};

const Card = ({ title, description, icon, href = "", className, direction, align }: CardProps) => {
  return (
    <Link to={href}>
      <div className={twMerge("flex flex-1", direction, align, className)}>
        <div className="w-10">
          <img src={icon} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
