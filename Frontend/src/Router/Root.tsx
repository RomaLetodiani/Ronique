import { Outlet } from "react-router";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import SideBar from "../Layout/SideBar";
import { useGetCurrentUser } from "../Hooks/useGetCurrentUser";

const Root = () => {
  useGetCurrentUser();
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
