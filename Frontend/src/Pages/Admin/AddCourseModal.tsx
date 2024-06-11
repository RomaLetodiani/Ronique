import { useState } from "react";
import ImageToBase64Converter from "../../Components/ImageToBase64Converter";
import Modal, { ModalProps } from "../../Components/Modal/Modal";
import Input from "../../Components/UI/Input";
import { useInput } from "../../Hooks/useInput";
import { isValid } from "../../Utils/Validators";

const AddCourseModal = (props: ModalProps) => {
  // TODO: Clear Inputs on Close

  const [image, setImage] = useState("");
  const titleInput = useInput((value) => isValid(value));
  const descInput = useInput((value) => isValid(value));
  // TODO: Change Category Input to Selector
  const categoryInput = useInput((value) => isValid(value));

  // TODO: if onSale is false, disable salePrice input
  const [onSale, setOnSale] = useState(false);

  const handleImageChange = (base64: string) => {
    setImage(base64);
  };
  return (
    <Modal {...props}>
      <Input {...titleInput} label="Course Name" />
      {/* TODO: Make Selector Component For Categories */}
      <Input {...descInput} label="Description" />
      {/* TODO: Make Checkbox Component For Sales Input */}
      {/* TODO: Make Number Input or Selector */}

      <ImageToBase64Converter initialImage={image} handleChange={handleImageChange} />
    </Modal>
  );
};

export default AddCourseModal;
