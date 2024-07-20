import { Navigate, Outlet } from "react-router";
import { Role } from "@/Types/User.interface";
import { authStore } from "@/Stores";

const RoleRoute = ({ role }: { role: Role }) => {
  const { user } = authStore();
  return user?.role === role ? <Outlet /> : <Navigate to="/forbiddenPage" />;
};

export default RoleRoute;
