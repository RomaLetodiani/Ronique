import { Navigate, Outlet } from "react-router";
import authStore from "../Stores/Auth.store";
import { isAdmin } from "../Utils/Claims";

const AdminRoute = () => {
  const { user } = authStore();
  return isAdmin(user?.role) ? <Outlet /> : <Navigate to="/forbiddenPage" />;
};

export default AdminRoute;
