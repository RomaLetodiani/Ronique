import { ReactNode } from "react";
import Button from "../UI/Button";

export type ModalProps = {
  children?: ReactNode;
  open: boolean;
  close: () => void;
};

const Modal = ({ children, open, close }: ModalProps) => {
  return (
    open && (
      <div className="w-full h-full fixed flex justify-center items-center inset-0 z-50">
        <div className="bg-black/20 backdrop-blur-sm fixed w-full z-30 h-full"></div>
        <div className="bg-white rounded-xl z-40">
          <div className="p-5">{children}</div>
          <div className="border-t p-5 flex justify-end gap-5">
            <Button btnType="secondary" onClick={close}>
              Close
            </Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
