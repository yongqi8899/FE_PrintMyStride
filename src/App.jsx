import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense} from "react";

import { getAllProducts, getOneProduct } from "@/data/products/loaders.js";
import { getAllOrders, getOneOrder } from "@/data/orders/loaders.js";
import { createPayment } from "@/data/pays/actions.js";

import { RootLayout } from "@/layout";
import Loading from "@/components/Loading.jsx";

// lazyLoad
const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader: getAllProducts,
      children: [
        {
          index: true,
          element: lazyLoad(() => import("@/pages/Home"))(),
          loader: getAllProducts,
        },
        {
          path: "/products/:id",
          element: lazyLoad(() => import("@/pages/Detail"))(),
          loader: ({ params }) => getOneProduct(params.id),
        },
        {
          path: "/login",
          element: lazyLoad(() => import("@/pages/Login"))(),
        },
        {
          path: "/register",
          element: lazyLoad(() => import("@/pages/Register"))(),
        },
        {
          path: "/about",
          element: lazyLoad(() => import("@/pages/About"))(),
        },
        {
          path: "/contact",
          element: lazyLoad(() => import("@/pages/Contact"))(),
        },
        {
          element: lazyLoad(() => import("@/layout/ProtectLayout"))(),
          children: [
            {
              path: "/cart",
              element: lazyLoad(() => import("@/pages/Cart"))(),
            },
            {
              path: "/me",
              element: lazyLoad(() => import("@/pages/Me"))(),
            },
            {
              path: "/orders/user/:userId",
              element: lazyLoad(() => import("@/pages/Orders"))(),
              loader: ({ params }) => getAllOrders(params.userId),
            },
            {
              path: "/orders/:id",
              element: lazyLoad(() => import("@/pages/Order"))(),
              loader: ({ params }) => getOneOrder(params.id),
            },
            {
              path: "/pay",
              element: lazyLoad(() => import("@/pages/Pay"))(),
              action: createPayment,
            },
          ],
        },
      ],
      errorElement: lazyLoad(() => import("@/pages/ErrorPage"))(),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;