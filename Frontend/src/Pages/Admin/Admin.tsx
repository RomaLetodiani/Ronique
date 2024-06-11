import { useState } from "react";
import Button from "../../Components/UI/Button";
import AddCourseModal from "./AddCourseModal";
import RenderCourses from "./RenderCourses";

const Admin = () => {
  const [open, setOpen] = useState(false);
  const handleAdd = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="p-5 ">
      <div className="shadow-sm flex justify-between items-center py-5 mb-5">
        <h2>Admin Panel</h2>
        <Button onClick={handleAdd}>Add Course</Button>
      </div>
      <AddCourseModal open={open} close={handleClose} />
      <div>
        <RenderCourses />
      </div>
    </div>
  );
};

export default Admin;
