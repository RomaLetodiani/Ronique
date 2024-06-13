import { useEffect, useState } from "react";
import ImageToBase64Converter from "../../Components/ImageToBase64Converter";
import Modal, { ModalI } from "../../Components/Modal/Modal";
import Input from "../../Components/UI/Input";
import { useInput } from "../../Hooks/useInput";
import { isValid } from "../../Utils/Validators";
import CheckBox from "../../Components/UI/CheckBox";
import CategorySelector from "../../Components/CategorySelector/CategorySelector";
import categoryServices from "../../Services/CategoryServices";
import { CategoryI } from "../../Types/Category.interface";

const AddCourseModal = (props: ModalI) => {
  const [image, setImage] = useState("");
  const titleInput = useInput((value) => isValid(value), "");
  const descInput = useInput((value) => isValid(value), "");
  const [category, setCategory] = useState<CategoryI>();
  const [categories, setCategories] = useState<CategoryI[]>();

  const fetchCategories = async () => {
    await categoryServices.allCategories().then(({ data }) => {
      setCategories(data);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const [onSale, setOnSale] = useState(false);
  const salePriceInput = useInput((value) => {
    if (value) return !isNaN(Number(value)) && Number(value) > 0;
    return false;
  }, 10);

  const priceInput = useInput((value) => {
    if (value) return !isNaN(Number(value)) && Number(value) > 0;
    return false;
  }, 10);

  const handleImageChange = (base64: string) => {
    setImage(base64);
  };

  const handleClear = () => {
    props.close();
    setOnSale(false);
    titleInput.clear();
    descInput.clear();
    priceInput.clear();
    salePriceInput.clear();
    setImage("");
  };

  return (
    <Modal bodyClassName="flex flex-col gap-5 max-w-[300px]" {...props} close={handleClear}>
      <div className="flex flex-col gap-2">
        <CheckBox
          withText
          checkedText="On Sale"
          uncheckedText="Not On Sale"
          checked={onSale}
          id="onSale"
          onChange={() => setOnSale((prev) => !prev)}
        />
        {onSale && <Input type="number" label="Sale Price" {...salePriceInput} />}
      </div>
      <Input type="number" min={1} {...priceInput} label="Price" />
      <Input {...titleInput} label="Course Name" />
      <CategorySelector selected={category} setSelected={setCategory} options={categories || []} />
      <Input {...descInput} label="Description" />

      <ImageToBase64Converter initialImage={image} handleChange={handleImageChange} />
    </Modal>
  );
};

export default AddCourseModal;
