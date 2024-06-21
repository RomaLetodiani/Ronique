import { Outlet } from "react-router";

const Admin = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
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
