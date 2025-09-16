import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";
import CategoryProduct from "../pages/CategoryProduct";

import CheckLogin from "../component/CheckLogin";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/category/:category",
        element: <CategoryProduct />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <CheckLogin>
            <Cart />
          </CheckLogin>
        ),
      },
    ],
  },
]);

export default appRouter;
