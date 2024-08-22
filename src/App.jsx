import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import { getAllProducts } from "@/data/products/loaders.js";

import { RootLayout, ProtectLayout } from "@/layout";
import Loading from "@/components/Loading.jsx";

const About = lazy(()=>import("@/pages/About.jsx"))
const Cart = lazy(()=>import("@/pages/Cart.jsx"))
const Contact = lazy(()=>import("@/pages/Contact.jsx"))
const Detail = lazy(()=>import("@/pages/Detail.jsx"))
const ErrorPage = lazy(()=>import("@/pages/ErrorPage.jsx"))
const Home = lazy(()=>import("@/pages/Home.jsx"))
const Login = lazy(()=>import("@/pages/Login.jsx"))
const Me = lazy(()=>import("@/pages/Me.jsx"))
const Products = lazy(()=>import("@/pages/Products.jsx"))
const Register = lazy(()=>import("@/pages/Register.jsx"))


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
          path: "/products/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <Detail />
            </Suspense>
          ),
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
          path: "/cart",
          element: (
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          ),
          loader: getAllProducts,
        },
        {
          path: "/me",
          element: (
            <Suspense fallback={<Loading />}>
              <Me />
            </Suspense>
          ),
        }
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
