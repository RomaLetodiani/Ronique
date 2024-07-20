import { categoryStore } from "@/Stores";
import HandlerHeader from "../Shared/HandlerHeader";
import Category from "./Category";
import HandleCategory from "./HandleCategory";
import { Button, CheckBox, Input } from "@/Components/UI";

const CategoryPage = () => {
  const { categories } = categoryStore();
  const {
    handleAdd,
    handleDelete,
    selectedKeys,
    handleSelectAll,
    handleSelect,
    categoryInput,
    addMode,
    setAddMode,
    handleClose,
  } = HandleCategory();

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

      <div>
        <CheckBox
          id="selectAllCategories"
          checked={selectedKeys.length === categories.length}
          onChange={handleSelectAll}
          uncheckedText="Select All"
          checkedText="Deselect All"
          withText
        />
        <div className="flex flex-col gap-3">
          {categories.map((category, index) => {
            return (
              <Category
                selectedP={selectedKeys.includes(category.id)}
                key={index}
                category={category}
                handleSelect={handleSelect}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
