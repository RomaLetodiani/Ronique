import { useState } from "react";
import { toast } from "react-toastify";
import globalStore from "../../../Stores/Global.store";
import HandlerHeader from "../Shared/HandlerHeader";
import { isValid } from "../../../Utils/Validators";
import { useInput } from "../../../Hooks/useInput";
import Input from "../../../Components/UI/Input";
import Button from "../../../Components/UI/Button";
import categoryServices from "../../../Services/CategoryServices";
import Category from "./Category";

const CategoryPage = () => {
  const [addMode, setAddMode] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const categoryInput = useInput((value) => isValid(value));
  const { deleteCategory, addCategory, categories } = globalStore();
  const handleAdd = () => {
    if (categoryInput.hasError || !categoryInput.value) {
      toast.error("Please enter a valid category");
      return;
    }
    categoryServices
      .addCategory({ name: categoryInput.value as string })
      .then(({ data }) => {
        addCategory(data);
        toast.success("Category added successfully");
        handleClose();
      })
      .catch(() => {
        toast.error("Error while adding category");
      });
  };
  const handleDelete = () => {
    if (!selectedKeys.length) {
      toast.error("Please select a category to delete");
      return;
    }
    new Promise<void>((resolve, reject) => {
      selectedKeys.forEach((id) => {
        categoryServices
          .deleteCategory(id)
          .then(() => {
            deleteCategory(id);
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    });
  };
  const handleClose = () => {
    categoryInput.clear();
    setAddMode(false);
  };

  const handleSelect = (id: string) => {
    if (selectedKeys.includes(id)) {
      setSelectedKeys(selectedKeys.filter((key) => key !== id));
    } else {
      setSelectedKeys([...selectedKeys, id]);
    }
  };
  return (
    <>
      <HandlerHeader
        handleAdd={() => setAddMode(true)}
        handleDelete={handleDelete}
        title="Categories"
      />
      {addMode && (
        <div className="flex justify-between gap-5 rounded-lg px-5 py-3 mb-5 bg-secondary-200/10 border">
          <Input wrapperClassName="max-w-[300px]" {...categoryInput} label="Category" />
          <div className="flex gap-5 items-center">
            <Button btnType="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleAdd}>Add</Button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {categories.map((category, index) => {
          return <Category key={index} category={category} handleSelect={handleSelect} />;
        })}
      </div>
    </>
  );
};

export default CategoryPage;
