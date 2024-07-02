import { Outlet } from "react-router";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import handleDataFetching from "../Hooks/handleDataFetching";

const Root = () => {
  handleDataFetching();
  return (
    <div className="flex flex-col min-h-screen min-w-[375px">
      <Header />
      <div className="flex-1 w-full flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
