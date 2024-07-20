import { Footer, Header } from "@/Layout";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-[375px]">
      <Header />
      <main className="flex-[1_1_0]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
