import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import NavMobil from "@/components/NavMobil";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthContextProvider, CartProvider } from "@/context";

export default function RootLayout() {
  
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1500} theme="light" />
      {/* <AuthContextProvider> */}
        <CartProvider>
          <div className="hidden md:block">
            <Header />
          </div>
          <div className="block md:hidden">
            <NavMobil />
          </div>
          <div className="w-full !my-24">
            <Outlet />
          </div>
          <Footer />
        </CartProvider>
      {/* </AuthContextProvider> */}
    </div>
  );
}
