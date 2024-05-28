import { Navigate, Outlet } from "react-router";
import authStore from "../Stores/Auth.store";

const AuthRoute = () => {
  const isAuthenticated = authStore((state) => state.user !== null);
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoute;
