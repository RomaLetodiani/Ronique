import { ReactNode } from "react";

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
