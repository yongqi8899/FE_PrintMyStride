import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import { getAllProducts, getOneProduct } from "@/data/products/loaders.js";
import { getAllOrders, getOneOrder } from "@/data/orders/loaders.js";

import { createOrder, deleteOrder } from "@/data/orders/actions.js";

import { RootLayout, ProtectLayout } from "@/layout";
import Loading from "@/components/Loading.jsx";

const About = lazy(() => import("@/pages/About.jsx"));
const Cart = lazy(() => import("@/pages/Cart.jsx"));
const Contact = lazy(() => import("@/pages/Contact.jsx"));
const Detail = lazy(() => import("@/pages/Detail.jsx"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage.jsx"));
const Home = lazy(() => import("@/pages/Home.jsx"));
const Login = lazy(() => import("@/pages/Login.jsx"));
const Me = lazy(() => import("@/pages/Me.jsx"));
const Register = lazy(() => import("@/pages/Register.jsx"));
const Order = lazy(() => import("@/pages/Order.jsx"));
const Orders = lazy(() => import("@/pages/Orders.jsx"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader: getAllProducts,
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
          path: "/products/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <Detail />
            </Suspense>
          ),
          loader: ({ params }) => {
            return getOneProduct(params.id);
          },
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
          path: "/about",
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loading />}>
              <Contact />
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
              path: "/cart",
              element: (
                <Suspense fallback={<Loading />}>
                  <Cart />
                </Suspense>
              ),
            },
            {
              path: "/me",
              element: (
                <Suspense fallback={<Loading />}>
                  <Me />
                </Suspense>
              ),
            },
            {
              path: "/orders",
              element: (
                <Suspense fallback={<Loading />}>
                   <Orders />
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
              loader: ({params})=>{
                return getOneOrder(params.id)
              },
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
