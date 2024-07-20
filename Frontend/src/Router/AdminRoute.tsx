import { Navigate, Outlet } from "react-router";
import { isAdmin } from "../Utils/Claims";
import { authStore } from "../Stores";

const AdminRoute = () => {
  const { user } = authStore();
  return isAdmin(user?.role) ? <Outlet /> : <Navigate to="/forbiddenPage" />;
};

export default AdminRoute;
