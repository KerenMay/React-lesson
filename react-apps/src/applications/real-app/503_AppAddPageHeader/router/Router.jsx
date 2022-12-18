import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
// import Layout from "./layouts/Layout";
// import Button from "@mui/material/Button";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage.jsx";
import routes from "./routes";

const router = createBrowserRouter([
  {
    path: routes.HOMEPAGE,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.ABOUT_PAGE,
    element: <AboutPage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
