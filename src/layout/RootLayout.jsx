import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  AuthContextProvider,
  CartProvider,
} from "@/context";
import { useLoaderData } from "react-router-dom";

export default function RootLayout() {
  const products = useLoaderData();
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1500} theme="light" />
      <AuthContextProvider>
          <CartProvider>
            <Header />
            <Outlet context={products}/>
            <Footer />
          </CartProvider>
      </AuthContextProvider>
    </div>
  );
}
