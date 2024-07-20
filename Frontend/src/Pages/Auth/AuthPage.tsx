import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import { allRightsReserved } from "@/Utils/Const";
import { logo } from "@/Assets";

const AuthPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/auth" || pathname === "/auth/") {
      navigate("login");
    }
  }, [pathname]);
  return (
    <div className="w-full bg-gradient-to-bl from-light-blue to-light-gray min-h-screen min-w-[375px] flex flex-col justify-center items-center">
      <header className="w-full flex justify-center p-5 shadow-lg bg-sky-100">
        <Link to={"/"}>
          <img src={logo} alt="Ronique Logo" />
        </Link>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <div className="p-5 border-sky-200 border-2 backdrop-blur-xl shadow-2xl rounded-xl bg-white bg-opacity-30">
          <Outlet />
        </div>
      </main>
      <footer className="border border-secondary-200 bg-sky-100 p-5 w-full flex justify-center items-center">
        <p className="text-center flex items-center gap-2 text-sm text-primary">
          <FaRegCopyright /> {allRightsReserved}
        </p>
      </footer>
    </div>
  );
};

export default AuthPage;
