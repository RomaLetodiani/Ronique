import { useEffect, useState } from "react";
import AddCourseModal from "./AddCourseModal";
import RenderCourses from "./RenderCourses";
import Pagination from "../../../Components/UI/Pagination/Pagination";
import HandlerHeader from "../Shared/HandlerHeader";
import HandleCourses from "./HandleCourses";
import filteredProductsStore from "../../../Stores/Filtered.store";

const CoursesPage = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const { totalFilteredProducts, setFilterParams } = filteredProductsStore();
  const { handleDelete } = HandleCourses({ selectedKeys, setSelectedKeys });

  useEffect(() => {
    setFilterParams({ page });
  }, [page]);

  const handleAdd = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <HandlerHeader handleAdd={handleAdd} handleDelete={handleDelete} title="Courses" />

      {open && <AddCourseModal open={open} close={handleClose} />}
      <div>
        <RenderCourses selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
        <Pagination
          totalItems={totalFilteredProducts}
          pageSize={12}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default CoursesPage;
