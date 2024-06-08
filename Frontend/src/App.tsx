import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={Router} />
    </Suspense>
  );
};

export default App;
