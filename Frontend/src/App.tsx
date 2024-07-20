import Router from "@/Router/Router";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { handleDataFetching } from "./Hooks";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  handleDataFetching();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />
      <RouterProvider router={Router} />
    </Suspense>
  );
};

export default App;
