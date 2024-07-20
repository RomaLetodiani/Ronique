import { HTMLAttributes, ReactNode } from "react";

export interface ModalI extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  open: boolean;
  handleSubmit?: () => void;
  close: () => void;
  wrapperClassName?: string;
  modalClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}
