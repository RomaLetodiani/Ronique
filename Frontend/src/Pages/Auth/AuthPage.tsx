import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

const AuthPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/auth" || pathname === "/auth/") {
      navigate("login");
    }
  }, [pathname]);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1>Auth Header</h1>
      <div className="p-5 border rounded-xl">
        <Outlet />
      </div>
      <h1>Auth Footer</h1>
    </div>
  );
};

export default AuthPage;
