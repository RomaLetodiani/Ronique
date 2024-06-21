import { useState } from "react";
import Button from "../../Components/UI/Button";
import AddCourseModal from "./AddCourseModal";
import RenderCourses from "./RenderCourses";
import productServices from "../../Services/ProductServices";
import { toast } from "react-toastify";
import globalStore from "../../Stores/Global.store";

const CoursesPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const { deleteProduct } = globalStore();
  const handleAdd = () => setOpen(true);
  const handleDelete = () => {
    if (!selectedKeys.length) {
      toast.error("Please select a course to delete");
      return;
    }
    productServices
      .deleteProducts(selectedKeys)
      .then(() => {
        selectedKeys.forEach((id) => deleteProduct(id));
        setSelectedKeys([]);
        toast.success("Products deleted successfully");
      })
      .catch(() => {
        toast.error("Error while deleting products");
      });
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="border-b-2 rounded-xl px-5 flex justify-between items-center py-2 mb-5">
        <h2>Courses</h2>
        <div className="flex gap-3">
          <Button btnType="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </div>

      {open && <AddCourseModal open={open} close={handleClose} />}
      <div>
        <RenderCourses selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
      </div>
    </>
  );
};

export default CoursesPage;
