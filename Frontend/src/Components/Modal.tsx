import { ModalI } from "@/Types/Modal.interface";
import { twMerge } from "tailwind-merge";
import { Button } from "./UI";

const Modal = ({
  children,
  open,
  close,
  handleSubmit,
  wrapperClassName,
  modalClassName,
  bodyClassName,
  footerClassName,
  ...divAttrs
}: ModalI) => {
  return (
    open && (
      <div
        {...divAttrs}
        className={twMerge(
          "w-full h-full fixed flex justify-center items-center inset-0 z-50",
          wrapperClassName
        )}
      >
        <div className="bg-black/20 backdrop-blur-sm fixed w-full z-30 h-full"></div>
        <div className={twMerge("bg-white rounded-xl z-40", modalClassName)}>
          <div className={twMerge("p-5", bodyClassName)}>{children}</div>
          <div className={twMerge("border-t p-5 flex justify-end gap-5", footerClassName)}>
            <Button btnType="secondary" onClick={close}>
              Close
            </Button>
            <Button onClick={handleSubmit}>Save</Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
