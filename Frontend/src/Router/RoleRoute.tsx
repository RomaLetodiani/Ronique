import { Navigate, Outlet } from "react-router";
import authStore from "../Stores/Auth.store";
import { Role } from "../Types/User.interface";

const RoleRoute = ({ role }: { role: Role }) => {
  const { user } = authStore();
  return user?.role === role ? <Outlet /> : <Navigate to="/forbiddenPage" />;
};

export default RoleRoute;
