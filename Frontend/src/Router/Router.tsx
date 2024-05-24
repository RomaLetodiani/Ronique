import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/shop",
        element: <div>Shop</div>,
        children: [
          {
            path: ":id",
            element: <div>Shop Detail</div>,
          },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/profile",
            element: <div>Profile</div>,
          },
        ],
      },
    ],
  },
]);

export default Router;
