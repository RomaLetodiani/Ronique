import { useState } from "react";
import { ProductI } from "../../Types/Product.interface";
import ImageToBase64Converter from "../../Components/ImageToBase64Converter";
import { logo } from "../../Components/Shared/Assets/Assets";
import Button from "../../Components/UI/Button";
import { twMerge } from "tailwind-merge";
import productServices from "../../Services/ProductServices";
import { toast } from "react-toastify";

type Props = {
  course: ProductI;
  setCourse: React.Dispatch<React.SetStateAction<ProductI[]>>;
};

const Course = ({ course, setCourse }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [image, setImage] = useState("");

  const updateCourse = (id: string, image: string) => {
    productServices
      .updateProduct({ id, image })
      .then(({ data }) => {
        setCourse((prev) => [...prev.map((course) => (course.id === id ? data : course))]);
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
        setEditMode(false);
      })
      .then(() => {
        setCourse((prev) => [...prev.filter((course) => course.id !== id)]);
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
      className="relative bg-white group w-64 min-h-64 shadow-sm overflow-hidden rounded-xl border"
    >
      {editMode ? (
        <ImageToBase64Converter handleChange={setImage} initialImage={course.image} />
      ) : (
        <div className="p-5">
          <img src={!course.image.split(",")[1] ? logo : course.image} alt={course.title} />
          <div className="flex justify-between items-center">
            <h5>{course.title}</h5>
            <p>{course.price}$</p>
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
