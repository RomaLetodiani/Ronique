import { Outlet } from "react-router";

const Admin = () => {
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
