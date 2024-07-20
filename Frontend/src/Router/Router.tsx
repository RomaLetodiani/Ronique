import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@/Pages/Home/Home"));
const Root = lazy(() => import("./Root"));
const Error = lazy(() => import("@/Pages/Error/Error"));

const AdminRoute = lazy(() => import("./AdminRoute"));
const Admin = lazy(() => import("@/Pages/Admin/Admin"));
const CoursesPage = lazy(() => import("@/Pages/Admin/Course/CoursesPage"));
const CategoryPage = lazy(() => import("@/Pages/Admin/Category/CategoryPage"));

const AuthRoute = lazy(() => import("./AuthRoute"));
const AuthPage = lazy(() => import("@/Pages/Auth/AuthPage"));
const LoginPage = lazy(() => import("@/Pages/Auth/Login/LoginPage"));
const RegisterPage = lazy(() => import("@/Pages/Auth/Register/RegisterPage"));

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Profile = lazy(() => import("@/Pages/Profile/Profile"));

const ContactPage = lazy(() => import("@/Pages/Contact/ContactPage"));
const CartPage = lazy(() => import("@/Pages/Cart/CartPage"));
const WishListPage = lazy(() => import("@/Pages/WishList/WishListPage"));
const FAQPage = lazy(() => import("@/Pages/FAQ/FAQPage"));
const AboutPage = lazy(() => import("@/Pages/About/AboutPage"));
const Courses = lazy(() => import("@/Pages/Courses/Courses"));
const Course = lazy(() => import("@/Pages/Course/Course"));

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
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <Course />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
            children: [
              {
                path: "",
                element: <>dashboard</>,
              },
              {
                element: <AdminRoute />,
                children: [
                  {
                    path: "admin",
                    element: <Admin />,
                    children: [
                      {
                        path: "/profile/admin",
                        element: <Navigate to="courses" />,
                      },
                      {
                        path: "courses",
                        element: <CoursesPage />,
                      },
                      {
                        path: "category",
                        element: <CategoryPage />,
                      },
                    ],
                  },
                ],
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
