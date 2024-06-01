import { Outlet } from "react-router";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import SideBar from "../Layout/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// BUG: Forgot to import CSS file for toastify

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-[375px">
      <ToastContainer />
      <Header />
      <SideBar />
      <div className="flex-1 w-full flex">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
