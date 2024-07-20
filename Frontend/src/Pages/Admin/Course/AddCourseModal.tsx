import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { isValid } from "@/Utils";
import { CategoryI } from "@/Types/Category.interface";
import { ImageToBase64Converter, Modal } from "@/Components";
import { useInput } from "@/Hooks";
import { productStore } from "@/Stores";
import { CheckBox, Selector, Input } from "@/Components/UI";
import { ModalI } from "@/Types/Modal.interface";
import productServices from "@/Services/ProductServices";
import categoryServices from "@/Services/CategoryServices";

const AddCourseModal = (props: ModalI) => {
  const titleInput = useInput((value) => isValid(value));
  const descInput = useInput((value) => isValid(value));
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<CategoryI[]>();
  const [onSale, setOnSale] = useState(false);
  const salePriceInput = useInput((value) => {
    if (value) return !isNaN(Number(value)) && Number(value) > 0;
    return false;
  }, 10);
  const priceInput = useInput((value) => {
    if (value) return !isNaN(Number(value)) && Number(value) > 0;
    return false;
  }, 10);

  const [image, setImage] = useState("");
  const handleImageChange = (base64: string) => {
    setImage(base64);
  };

  const { addProduct } = productStore();

  const errors = [
    titleInput.hasError,
    !titleInput.value,
    descInput.hasError,
    !descInput.value,
    !category,
    !priceInput.value,
    priceInput.hasError,
    onSale && (!salePriceInput.value || salePriceInput.hasError),
  ];

  const handleCourseCreate = () => {
    if (errors.some((err) => err)) {
      toast.error("Fill all fields correctly");
      return;
    }
    productServices
      .addProduct({
        title: titleInput.value as string,
        description: descInput.value as string,
        price: priceInput.value as number,
        salePrice: onSale ? (salePriceInput.value as number) : null,
        image,
        category_name: category as string,
      })
      .then(({ data }) => {
        addProduct(data);
      })
      .catch(() => {
        toast.error("Error while adding product");
      })
      .finally(() => {
        handleClear();
      });
  };

  const fetchCategories = async () => {
    await categoryServices.allCategories().then(({ data }) => {
      setCategories(data);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
    <Modal
      handleSubmit={handleCourseCreate}
      bodyClassName="flex flex-col gap-5 max-w-[300px]"
      {...props}
      close={handleClear}
    >
      <div className="flex flex-col gap-2">
        <CheckBox
          withText
          checkedText="On Sale"
          uncheckedText="Not On Sale"
          checked={onSale}
          id="onSale"
          onChange={() => setOnSale((prev) => !prev)}
        />
        <Input
          type="number"
          label={onSale ? "Sale Price" : "Enable Sale"}
          disabled={!onSale}
          {...salePriceInput}
        />
      </div>
      <Input type="number" min={1} {...priceInput} label="Price" />
      <Input {...titleInput} label="Course Name" />
      {categories && (
        <Selector
          defaultOption="Select Category"
          label="Category"
          selected={category}
          setSelected={(option) => typeof option === "string" && setCategory(option)}
          options={categories.map((category) => {
            return { title: category.name, value: category.name };
          })}
        />
      )}
      <Input {...descInput} label="Description" />

      <ImageToBase64Converter initialImage={image} handleChange={handleImageChange} />
    </Modal>
  );
};

export default AddCourseModal;
