import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Admin from "../Pages/Admin/Admin";
import AuthPage from "../Pages/Auth/AuthPage";
import LoginPage from "../Pages/Auth/Login/LoginPage";
import RegisterPage from "../Pages/Auth/Register/RegisterPage";
import AuthRoute from "./AuthRoute";
import Profile from "../Pages/Profile/Profile";
import ContactPage from "../Pages/Contact/ContactPage";
import AboutPage from "../Pages/About/AboutPage";
import CartPage from "../Pages/Cart/CartPage";
import WishListPage from "../Pages/WishList/WishListPage";
import FAQPage from "../Pages/FAQ/FAQPage";

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
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/courses",
        element: <div>Courses</div>,
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
            element: <Profile />,
          },
          {
            element: <AdminRoute />,
            children: [
              {
                path: "/admin",
                element: <Admin />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/auth",
        element: <AuthPage />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

export default Router;
