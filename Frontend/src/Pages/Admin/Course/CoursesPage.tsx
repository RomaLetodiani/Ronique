import { useEffect, useState } from "react";
import AddCourseModal from "./AddCourseModal";
import RenderCourses from "./RenderCourses";
import productServices from "../../../Services/ProductServices";
import { toast } from "react-toastify";
import globalStore from "../../../Stores/Global.store";
import Pagination from "../../../Components/UI/Pagination/Pagination";
import HandlerHeader from "../Shared/HandlerHeader";

const CoursesPage = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const { deleteProduct, totalProducts, setFilterParams } = globalStore();

  useEffect(() => {
    setFilterParams({ page });
  }, [page]);

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
        if (selectedKeys.length === 12) {
          setPage(1);
        }
        toast.success("Products deleted successfully");
      })
      .catch(() => {
        toast.error("Error while deleting products");
      });
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <HandlerHeader handleAdd={handleAdd} handleDelete={handleDelete} title="Courses" />

      {open && <AddCourseModal open={open} close={handleClose} />}
      <div>
        <RenderCourses selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
        <Pagination totalItems={totalProducts} pageSize={12} page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default CoursesPage;
