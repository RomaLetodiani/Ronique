import { Navigate, Outlet } from "react-router";
import authStore from "../Stores/Auth.store";

const PrivateRoute = () => {
  const isAuthenticated = authStore((state) => !!state.user);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
