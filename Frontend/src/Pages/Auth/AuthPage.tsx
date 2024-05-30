import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { logo } from "../../Components/Shared/Assets/Assets";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/auth" || pathname === "/auth/") {
      navigate("login");
    }
  }, [pathname]);
  return (
    <div className="w-full min-h-screen min-w-[375px] flex flex-col justify-center items-center">
      <header className="w-full flex justify-center p-5 shadow-lg">
        <Link to={"/"}>
          <img src={logo} alt="Ronique Logo" />
        </Link>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <div className="p-5 border rounded-xl">
          <Outlet />
        </div>
      </main>
      <footer className="border border-secondary-200 bg-secondary-200 p-5 w-full flex justify-center items-center">
        <p className="text-center flex items-center gap-2 text-sm text-primary">
          <FaRegCopyright /> 2024 Ronique
        </p>
      </footer>
    </div>
  );
};

export default AuthPage;
