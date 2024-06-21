import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />

      <RouterProvider router={Router} />
    </Suspense>
  );
};

export default App;
