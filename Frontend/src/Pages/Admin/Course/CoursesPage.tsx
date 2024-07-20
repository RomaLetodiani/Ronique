import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import RenderCourses from "./RenderCourses";
import Pagination from "../../../Components/UI/Pagination/Pagination";
import HandlerHeader from "../Shared/HandlerHeader";
import HandleCourses from "./HandleCourses";
import { productStore } from "../../../Stores";

const CoursesPage = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const { totalProducts } = productStore();
  const { handleDelete } = HandleCourses({ selectedKeys, setSelectedKeys });

  const handleAdd = () => setOpen(true);
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
