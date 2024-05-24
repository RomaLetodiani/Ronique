import { Outlet } from "react-router";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import SideBar from "../Layout/SideBar";

const Root = () => {
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
