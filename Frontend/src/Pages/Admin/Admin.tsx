import { Outlet } from "react-router";

const Admin = () => {
  const arr = [
    "aaaaaaaa", 
    "bbbbbbbb", 
    "cccccccc", 
    "dddddddd", 
    "eeeeeeee"];
  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
