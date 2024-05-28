import { Navigate, Outlet } from "react-router";
import authStore from "../Stores/Auth.store";
import { Role } from "../Types/User.interface";

const AdminRoute = () => {
  const { user } = authStore();
  return user?.role === Role.ADMIN ? <Outlet /> : <Navigate to="/forbiddenPage" />;
};

export default AdminRoute;
