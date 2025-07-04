import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/PageNotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },

        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export { App };
