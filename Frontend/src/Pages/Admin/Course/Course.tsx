import { useEffect, useState } from "react";
import { ProductI } from "../../../Types/Product.interface";
import ImageToBase64Converter from "../../../Components/ImageToBase64Converter";
import { logo } from "../../../Components/Shared/Assets/Assets";
import Button from "../../../Components/UI/Button";
import { twMerge } from "tailwind-merge";
import productServices from "../../../Services/ProductServices";
import { toast } from "react-toastify";
import CheckBox from "../../../Components/UI/CheckBox";
import PriceRender from "../../../Components/PriceRender";
import productStore from "../../../Stores/Product.store";

type Props = {
  course: ProductI;
  handleSelect: (id: string) => void;
  selectedP: boolean;
};

const Course = ({ course, handleSelect, selectedP }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [selected, setSelected] = useState(selectedP);
  const [image, setImage] = useState("");
  const { deleteProduct, updateProduct } = productStore();

  useEffect(() => {
    setSelected(selectedP);
  }, [selectedP]);

  const onSelect = (id: string) => {
    handleSelect(id);
    setSelected((prev) => !prev);
  };

  const updateCourse = (id: string, image: string) => {
    productServices
      .updateProduct({ id, image })
      .then(({ data }) => {
        updateProduct(data);
        toast.success("Product updated successfully");
      })
      .catch(() => {
        toast.error("Product update failed");
      })
      .finally(() => {
        setEditMode(false);
      });
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleDelete = (id: string) => {
    productServices
      .deleteProducts([id])
      .then(() => {
        deleteProduct(id);
        setEditMode(false);
      })
      .then(() => {
        toast.success("Product deleted successfully");
      })
      .catch(() => {
        toast.error("Product deletion failed");
      })
      .finally(() => {
        setEditMode(false);
      });
  };

  return (
    <div
      key={course.id}
      className={twMerge(
        "relative bg-white group w-64 min-h-64 shadow-sm overflow-hidden rounded-xl border hover:scale-105 cursor-pointer",
        "transition-all duration-300 ease-in-out",
        selected && "border-primary border-b-4 border-r-4"
      )}
    >
      {editMode ? (
        <ImageToBase64Converter handleChange={setImage} initialImage={course.image} />
      ) : (
        <div onClick={() => onSelect(course.id)} className="p-5 relative">
          <div className="absolute right-2 top-2">
            <CheckBox clickable={false} id={course.id} checked={selected} />
          </div>
          <img src={!course.image.split(",")[1] ? logo : course.image} alt={course.title} />
          <div className="flex justify-between items-center">
            <h5>{course.title}</h5>
            <PriceRender price={course.price} salePrice={course.salePrice} />
          </div>
          <p className="border my-2 rounded-md">{course.description.slice(0, 100)}...</p>
        </div>
      )}
      <div
        className={twMerge(
          "p-2 transition-all -bottom-16 group-hover:bottom-0 bg-slate-100 w-full flex gap-2 justify-end",
          !editMode && "absolute"
        )}
      >
        {editMode ? (
          <>
            <Button className="text-sm px-2" btnType="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              className="text-sm px-2"
              onClick={() => handleDelete(course.id)}
              btnType="danger"
            >
              Delete
            </Button>
            <Button className="text-sm px-2" onClick={() => updateCourse(course.id, image)}>
              Update
            </Button>
          </>
        ) : (
          <Button onClick={() => setEditMode(true)}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default Course;
