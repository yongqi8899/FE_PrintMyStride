import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import { getAllProducts } from "@/data/products/loaders.js";
import { getAllOrders } from "@/data/orders/loaders.js";

import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/data/products/actions.js";
import {
  createOrder,
  updateOrder,
  deleteOrder,
} from "@/data/orders/actions.js";

import { RootLayout, ProtectLayout } from "@/layout";
import Loading from "@/components/Loading.jsx";

const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Home = lazy(() => import("@/pages/Home"));
const Me = lazy(() => import("@/pages/Me"));

const Products = lazy(() => import("@/pages/product/index.jsx"));
const Product = lazy(() => import("@/pages/product/Product"));
const UpdateProductForm = lazy(() => import("@/pages/product/UpdateForm"));
const CreateProductForm = lazy(() => import("@/pages/product/CreateForm"));
const DeleteProductForm = lazy(() => import("@/pages/product/DeleteForm"));

const Cart = lazy(() => import("@/pages/order/Cart"));
const Order = lazy(() => import("@/pages/order/Order"));
const UpdateOrderForm = lazy(() => import("@/pages/order/UpdateForm"));
const CreateOrderForm = lazy(() => import("@/pages/order/CreateForm"));
const DeleteOrderForm = lazy(() => import("@/pages/order/DeleteForm"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/products",
          element: (
            <Suspense fallback={<Loading />}>
              <Products />
            </Suspense>
          ),
          loader: getAllProducts,
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          ),
        },

        {
          index: "",
          element: (
            <Suspense fallback={<Loading />}>
              <ProtectLayout />
            </Suspense>
          ),
          children: [
            {
              path: "/me",
              element: (
                <Suspense fallback={<Loading />}>
                  <Me />
                </Suspense>
              ),
              loader: getAllProducts,
            },
  
            {
              path: "/products/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <Product />
                </Suspense>
              ),
              loader: getAllProducts,
            },
            {
              path: "/products/:id/update",
              element: (
                <Suspense fallback={<Loading />}>
                  <UpdateProductForm />
                </Suspense>
              ),
              action: updateProduct,
              loader: getAllProducts,
            },
            {
              path: "/products/create",
              element: (
                <Suspense fallback={<Loading />}>
                  <CreateProductForm />
                </Suspense>
              ),
              action: createProduct,
            },
            {
              path: "/products/:id/delete",
              element: (
                <Suspense fallback={<Loading />}>
                  <DeleteProductForm />
                </Suspense>
              ),
              action: deleteProduct,
              loader: getAllProducts,
            },
            {
              path: "/orders",
              element: (
                <Suspense fallback={<Loading />}>
                  <Cart />
                </Suspense>
              ),
              loader: getAllOrders,
            },
            {
              path: "/orders/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <Order />
                </Suspense>
              ),
              loader: getAllOrders,
            },
            {
              path: "/orders/:id/update",
              element: (
                <Suspense fallback={<Loading />}>
                  <UpdateOrderForm />
                </Suspense>
              ),
              action: updateOrder,
              loader: getAllOrders,
            },
            {
              path: "/orders/create",
              element: (
                <Suspense fallback={<Loading />}>
                  <CreateOrderForm />
                </Suspense>
              ),
              action: createOrder,
            },
            {
              path: "/orders/:id/delete",
              element: (
                <Suspense fallback={<Loading />}>
                  <DeleteOrderForm />
                </Suspense>
              ),
              action: deleteOrder,
              loader: getAllOrders,
            },
          ],
        },
      ],
      errorElement: (
        <Suspense fallback={<Loading />}>
          <ErrorPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
